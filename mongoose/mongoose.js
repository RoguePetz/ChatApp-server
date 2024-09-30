const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.ATLAS;


const connectDB = async () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then(() => {
          console.log('MongoDB connected...',);
        })
        .catch(err => console.error(err));
};

module.exports = connectDB;