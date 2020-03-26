/* Admin model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const AdminSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true
	}, 
	password: {
		type: String,
		required: true,
		minlength: 4
	}
});

AdminSchema.pre('save', function(next) {
	const Admin = this; // binds this to Admin document instance

	// checks to ensure we don't hash password more than once
	if (Admin.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(Admin.password, salt, (err, hash) => {
				Admin.password = hash;
				next()
			})
		})
	} else {
		next()
	}
});

// A static method on the document model.
// Allows us to find a Admin document by comparing the hashed password
//  to a given one, for example when logging in.
AdminSchema.statics.findByUsernamePassword = function(Adminname, password) {
	const Admin = this; // binds this to the Admin model

	// First find the Admin by their email
	return Admin.findOne({ username: Adminname }).then((Admin) => {
		if (!Admin) {
			return Promise.reject()  // a rejected promise
		}
		// if the Admin exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, Admin.password, (err, result) => {
				if (result) {
					resolve(Admin)
				} else {
					reject()
				}
			})
		})
	})
}

// make a model using the Admin schema
const Admin = mongoose.model('Admin', AdminSchema)
module.exports = { Admin }

