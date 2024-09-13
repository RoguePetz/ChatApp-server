const express = require('express')
const cors = require('cors');
const connectDB = require('./mongoose/mongoose');
const bodyParser = require('body-parser');
const app = express()
const userRoutes = require('./routes/userRoutes');
const User = require('./models/user');
const Post = require('./models/post');
const bcrypt = require('bcryptjs');



const userRoute = require('./routes/userRoutes');
const postRoute = require('./routes/postRoutes');

connectDB();

//middleware
app.use(cors());
app.use(userRoutes);
app.use(bodyParser.json());

//Routes
app.use("/user", userRoute);
app.use("/post", postRoute);


app.listen(5000,()=>{
    console.log('listening on port 5000');
});