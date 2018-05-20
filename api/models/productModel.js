var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema ({
    name: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    summary: String,
    description: String,
    inStock: Boolean,
    price: String,
    rank: Number
});

var Products = mongoose.model ('Products', productSchema);

module.exports = Products;