const express = require('express')
const cors = require('cors');
const connectDB = require('./mongoose/mongoose');
const bodyParser = require('body-parser');
const app = express()
const userRoutes = require('./routes/userRoutes');
const User = require('./models/user');
const Post = require('./models/post');
const bcrypt = require('bcryptjs');
require('dotenv').config();


const userRoute = require('./routes/userRoutes');
const postRoute = require('./routes/postRoutes');

connectDB();

//middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE', // Specify allowed HTTP methods
    credentials: true // Allow credentials if needed
}));
app.use(userRoutes);
app.use(bodyParser.json());

//Routes
app.use("/user", userRoute);
app.use("/post", postRoute);


app.listen(5000,()=>{
    console.log('listening on port 5000');
});