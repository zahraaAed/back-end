const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: { type: String, required: true },
    description: { type: String, required: true },
    categories_id: { type: Number, required: true },
    flavours: [{ type: String, required: true }],
    best_seller: { type: Boolean, required: true },
    price: { type: Number, required: true },
    images: { type: String, required: true },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

