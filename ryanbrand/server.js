'use strict';
const log = console.log;
const path = require('path');

const express = require('express');
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose');

// import the mongoose models

// to validate object IDs
const { ObjectID } = require('mongodb');

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/* Webpage Routes Below ******/

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
