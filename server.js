'use strict';
const log = console.log;
const cors = require('cors');
const express = require('express');
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose');
mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models

const { User } = require("./models/user");
const { Product } = require("./models/product");
const { Admin } = require("./models/admin");

// to validate object IDs
const { ObjectID } = require('mongodb');

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: ["https://nameless-shelf-54062.herokuapp.com"], credentials: true }));
app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://nameless-shelf-54062.herokuapp.com");
    next();
});
/*app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
});*/

/*** Session handling **************************************/
// Create a session cookie
app.use(
    session({
        secret: "oursecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 3600000,
            httpOnly: true
        }
    })
);

// Middleware for authentication of admin
const authenticate_admin = (req, res, next) => {
    if (req.session.user) {
        Admin.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user;
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized GTFO")
        })
    } else {
        res.status(401).send("Unauthorized GTFO")
    }
};

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
    console.log(req.session);
    if (req.session.user) {
        User.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user._id;
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
};


/*** API User Routes below ************************************/
// A route to login and create a session
app.post("/users/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    log(username, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findByUsernamePassword(username, password)
        .then(user => {
            // Add the user's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.username = user.username;
            req.session.userType = "normie";
            res.send({ currentUser: user._id });
        })
        .catch(error => {
            res.status(400).send(error)
        });
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send('successful logout')
        }
    });
});

// A route to check if a use is logged in on the session cookie
app.get("/users/check-session", (req, res) => {
    console.log(req.session);
    if (req.session.user) {
        res.send({ currentUser: req.session.user, userType: req.session.userType });
    } else {
        res.status(401).send();
    }
});

// A route to create a new user
app.post("/users", (req, res) => {
    // Create a new user
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    // Save the user
    user.save().then(
        user => {
            res.send(user);
        },
        error => {
            res.status(400).send(error);
        }
    )
});
// Get all products from user's cart
app.get("/cart/:id", authenticate, (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(404).send(); // can't find product
        return;
    }
    User.findById(id).then((user) => {
        if (!user) {
            res.status(404).send()
        } else {
            res.send(user.cart)
        }
    }).catch((error) => {
        res.status(500).send(error)
    })

});

// A Post request to add product to user's cart
app.post("/cart/:id", authenticate, (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(404).send('not valid id');
        return;
    }
    Product.findOne({name: req.body.name})
        .then(prod => {
            if (!prod) {
                res.status(404).send()
            } else {
                const product = {
                    _id: prod._id,
                    name: prod.name,
                    quantity: req.body.quantity,
                    price: prod.price
                };
                User.findById(id)
                    .then(user => {
                        if(!user) {
                            res.status(404).send('not a user')
                        } else {
                            // Checking for duplicate products
                            if (user.cart.id(prod._id) === null) { // Product is not already in user's cart
                                user.cart.push(product);
                                user.save().then (
                                    result => {
                                        res.send({product: product, user: result})
                                    }, error => {
                                        res.status(400).send(error)
                                    }
                                )
                            } else { // Product is already in user's cart
                                const cart_item = user.cart.id(prod._id);
                                cart_item.quantity += req.body.quantity;
                                user.save().then (
                                    result => {
                                        res.send({product: product, user: result})
                                    }, error => {
                                        res.status(400).send(error)
                                    }
                                )
                            }

                        }
                    })
            }
        })
        .catch(error =>{
            res.status(400).send(error)
        })
})

app.delete("/cart/:id/:prod_id", authenticate, (req, res) => {
    const id = req.params.id;
    const prod_id = req.params.prod_id;

    if (!ObjectID.isValid(id) || !ObjectID.isValid(prod_id)) {
        res.status(404).send();
        return;
    }

    User.findById(id)
        .then(user => {
            if (!user) {
                res.status(404).send()
            } else {
                const item = user.cart.id(prod_id);
                user.cart.id(prod_id).remove();
                user.save().then (
                    result => {
                        res.send({user: result, item: item})
                    },
                    error => {
                        res.status(400).send(error)
                    }
                )
            }
        })

});

// a route to add products to website
app.post("/products", authenticate_admin, (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: Number(req.body.price),
        description: req.body.description,
        category: req.body.category
    });
    log(product)
    product.save().then((result) => {
            res.send(result);
        },
        error => {
            res.status(400).send(error);
        }
    )
});


// a route to delete products from the website
app.delete("/products/:id", authenticate_admin, (req, res) => {
    const id = req.params.id;

    // Validate id
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return;
    }

    Product.findByIdAndRemove(id)
        .then(product => {
            if(!product) {
                res.status(404).send();
            } else {
                res.send(product)
            }
        })
        .catch(error => {
            res.status(500).send();
        })
});

// a GET route to get all products
app.get('/products', (req, res) => {
	Product.find().then((products) => {
        console.log("eeeee")
        res.send(products) // can wrap in object if want to add more properties
        
	}, (error) => {
		res.status(500).send(error) // server error
	})
});


// a GET route to get a product by its id
app.get('/products/:id', (req, res) => {
	log(req.params);
	const id = req.params.id;
	log(id);
	if (!ObjectID.isValid(id)) {
		res.status(404).send();// can't find product
		return;  
	}
	Product.findById(id).then((product) => {
		if (!product) {
			res.status(404).send()
		} else {
			res.send(product)
		}
	}).catch((error) => {
		res.status(500).send()
	})
});

// a PATCH route to edit a product
app.patch('/products/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
        return;
    }
    Product.findOneAndUpdate({_id: id}, {$set:body}, {new:true}).then((product) => {
        if (!product) {
            
            res.status(404).send();
        } else {
            res.send(product);
        }
    }).catch((error) => {
        res.status(400).send(); // bad request for changing the product
    })
});

// a GET route to get a product by its category
app.get('/products/category/:type', (req, res) => {
	const category = req.params.type;
	log(category);
	Product.findByCategory(category).then((result) => {
		if (!result.length) {
			res.status(404).send(); // couldn't find product
			return;
		} else {
			res.send(result) // can wrap in object if want to add more properties
		}
	}).catch((error) => {
		res.status(500).send() // server error
	})
});

// a GET route to get a product by its name
// app.get('/products/:name', (req, res) => {
// 	const name = req.params.name
// 	// log(name)
// 	Product.findByName(name).then((result) => {
// 		if (!result.length) {
// 			res.status(404).send() // couldn't find product
// 			return
// 		} else {
// 			log(!result)
// 			res.send(result) // can wrap in object if want to add more properties
// 		}
// 	}).catch((error) => {
// 		res.status(500).send() // server error
// 	})
// })

// a GET route to get all users
// TODO: check if admin
app.get('/users', (req, res) => {
	User.find().then((users) => {
		res.send({ users }) // can wrap in object if want to add more properties
	}, (error) => {
		res.status(500).send(error) // server error
	})
});

// a GET route to a user's cart? 
app.get('/users/:id', authenticate, (req, res) => {
	// log(req.params.id)
	const id = req.params.id;
	if (!ObjectID.isValid(id)) {
		res.status(404).send();  // if invalid id, definitely can't find resource, 404.
		return;
	}
	User.findOne({_id: id}).then((user) => {
		if (!user) {
			res.status(404).send()
		} else {
			const email = user.email;
			const cart = user.cart;
			res.send({ email, cart })
		}
	}).catch((error) => {
		res.status(500).send()
	})
});


//---Admin routes---//

// A route to create a new admin
app.post("/admins", (req, res) => {
    // Create a new user
    const admin = new Admin({
        username: req.body.username,
        password: req.body.password
    });

    // Save the user
    admin.save().then(
        admin => {
            res.send(admin);
        },
        error => {
            res.status(400).send(error);
        }
    )
});

// A route to check if an admin is logged in on the session cookie
app.get("/admins/check-session", (req, res) => {
    console.log(req.session);
    if (req.session.user) {
        res.send({ currentUser: req.session.username });
    } else {
        res.status(401).send();
    }
});

// A route to login an admin
app.post("/admins/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    log(username, password);
    // Use the static method on the User model to find a user
    // by their email and password
    Admin.findByUsernamePassword(username, password)
        .then(admin => {
            // Add the user's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = admin._id;
            req.session.username = admin.username;
            req.session.userType = "chad";
            res.send({ currentUser: admin._id });
        })
        .catch(error => {
            res.status(400).send(error)
        });
});


/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/ryanbrand/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/ryanbrand/build/index.html");
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`)
}) ;
