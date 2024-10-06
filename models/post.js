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
    time: { 
        type: String, 
        required: true 
    }
});
module.exports = mongoose.model('Post', PostSchema);