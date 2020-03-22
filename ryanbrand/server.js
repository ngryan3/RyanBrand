'use strict';
const log = console.log;

const express = require('express');
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose');
mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { User } = require("./models/user");
const { Product } = require("./models/product");

// to validate object IDs
const { ObjectID } = require('mongodb');

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/*** API User Routes below ************************************/
app.post("/users", (req, res) => {
    // Create a new user
    const user = new User({
        email: req.body.email,
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

/*** API Product Routes below ************************************/
app.post("/products", (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
    });

    product.save().then(
        result => {
            res.send(result);
        },
        error => {
            res.status(400).send(error);
        }
    )
});

app.delete("/products/:id", (req, res) => {
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


/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`)
}) ;

