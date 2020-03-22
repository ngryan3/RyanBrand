/* Product mongoose model */
const mongoose = require('mongoose')

// create product schema
const productSchema = new mongoose.Schema({
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
    },
    numInStock: {
        type: Number,
        required: true
    }
})

//Mongoose middleware



productSchema.statics.findByCategory = function(category){
    return this.category({ category });
}

productSchema.statics.findByName = function(name) {
    return this.find({ name })  
};



const Product = mongoose.model('Product', productSchema)
module.exports = { Product }