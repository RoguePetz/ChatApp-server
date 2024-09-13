const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
            ref: 'UserSchema',
            required: true
    },
    userName: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
}
, { timestamps: true });
module.exports = mongoose.model('Post', PostSchema);