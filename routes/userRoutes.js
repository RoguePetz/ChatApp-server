const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//to display get use details users 
router.get('/users',(req,res)=>{

  User.find()
  .then(users => {
    console.log(users); // Log the users
    res.send(users);
  })
  .catch(err => {
    console.error('Error fetching users:', err);
  });
})


router.get('/',(req,res)=>{
  res.send('Chat App API is running');
})

//add new users
router.post('/register', async (req, res) => {
try {
    const { username, email, password } = req.body;
    // Create a new item
    const newUser = new User({
        username,
        email,
        password,
    });

    // Save the item to the database
    const savedUser = await newUser.save();

    // Respond with the saved item
    res.json({success:'user saved'})
    res.status(201).json(savedUser);
} catch (err) {
    res.status(500).json({ error: 'username/email/password exist' });
}
});
//login users
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      // Check if the user exists
      let user = await User.findOne({ email,password });
      if (!user) {
          return res.status(400).json({ msg: 'Invalid email/password' });
      }
      // Check if the password is correct

      // Create and return a JWT
      const accessToken = jwt.sign({
          id: user.id
      }, 'mySecreteKey');
      res.json({
          userID: user.id,
          username: user.username,
          accessToken,
      })

  } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
  }
});





module.exports = router;