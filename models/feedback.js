const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  
    comment: { type: String, required: true },
    admin: { type: Schema.Types.ObjectId, ref: 'Admin' }

  

});

const Feedback = mongoose.model('Admin', FeedbackSchema);

module.exports = Feedback;
