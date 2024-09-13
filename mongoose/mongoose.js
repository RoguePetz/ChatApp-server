const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/chat-app';


const connectDB = async () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then(() => {
          console.log('MongoDB connected...');
        })
        .catch(err => console.error(err));
};

module.exports = connectDB;