const express = require('express');
const Post = require('../models/post');
const router = express.Router();
const bcrypt = require('bcryptjs');



router.get('/posts',(req,res)=>{

    Post.find()
    .then(Posts => {
      console.log(Posts); // Log the users
      res.send(Posts);
    })
    .catch(err => {
      console.error('Error fetching users:', err);
    });
  })
  
  router.post('/postus', async (req, res) => {
      try {
          const { userId, userName, content } = req.body;
          const datw = new Date()
          // Create a new item
          const newPost = new Post({
              userId,
              userName,
              content,
              datw
          });
          const savedPost = await newPost.save();
          // Respond with the saved item
          res.status(201).json(savedPost); 
          console.log(newPost)
      } catch (err) {
          res.status(500).json({ error: 'username/email/password exist' });
      }
    });

    module.exports = router;