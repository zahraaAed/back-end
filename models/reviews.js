
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: { type: String, required: true },
    reviews: { type: String, required: true },
    productsId: { type: Number, required: true },
});


const Review = mongoose.model('Admin', ReviewSchema);

module.exports = Review;