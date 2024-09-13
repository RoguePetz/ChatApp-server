const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  owner: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'RealUserSchematorSchema' // Reference to the correct schema name
  }
}, { timestamps: true });

module.exports = mongoose.model("Comment", CommentSchema); // Export the Apartment model