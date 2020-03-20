/* Product mongoose model */
const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    category: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

module.exports = { Product }