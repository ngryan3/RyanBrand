'use strict';
const log = console.log;
const path = require('path');

const express = require('express');
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose');

// import the mongoose models
const { Product } = require('./models/product')
const { User } = require('./models/user')

// to validate object IDs
const { ObjectID } = require('mongodb');

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/* Webpage Routes Below ******/


/*********************************************************/

/*** API Routes below ************************************/

// a GET route to get all products
app.get('/products', (req, res) => {
	Product.find().then((products) => {
		res.send({ products }) // can wrap in object if want to add more properties
	}, (error) => {
		res.status(500).send(error) // server error
	})
})


// a GET route to get a product by its id
app.get('/products/:id', (req, res) => {
	log(req.params)
	const id = req.params.id
	log(id)
	if (!ObjectID.isValid(id)) {
		res.status(404).send() // can't find product
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
})

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
})

// a GET route to a user by their email


// a PATCH route for changing properties of a product
// check if admin

// a PATCH route for changing properties of a user
// check if current user logged in

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`)
}) ;
