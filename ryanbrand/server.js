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

//a GET route to get a product by its name
app.get('/products/:name', (req, res) => {
	const name = req.params.name
	// log(name)
	Product.findByName(name).then((result) => {
		if (!result.length) {
			res.status(404).send() // couldn't find product
		} else {
			log(!result)
			res.send(result) // can wrap in object if want to add more properties
		}
	}).catch((error) => {
		res.status(500).send() // server error
	})
})

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`)
}) ;

// Handle find query errors
const handleFindResponse = (findQueryResponse) => {
	findQueryResponse
		.then(result => log('Documents queried: ', result))
		.catch((err) => log('Error fetching document(s): ', err))
}

// Handle update query errors
const handleUpdateResponse = (updateQueryResponse) => {
	updateQueryResponse
		.then((result) => {
			const { n, nModified } = result;
			if (n && nModified) {
				log(`Updated ${nModified} document(s).`)
			}
		})
		.catch((err) => log('Error updating document: ', err))
}

// Handle delete query errors
const handleDeleteResponse = (deleteQueryResponse) => {
	deleteQueryResponse
		.then(result => log(`Deleted ${result.deletedCount} item(s).`)) // .deletedCount has the number of documents removed
		.catch(err => log('Error deleting document(s): ', err))
}
