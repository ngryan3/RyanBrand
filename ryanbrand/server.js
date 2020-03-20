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

