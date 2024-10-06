const express = require('express');
const Post = require('../models/post');
const router = express.Router();
const bcrypt = require('bcryptjs');



router.get('/posts',(req,res)=>{

    Post.find()
    .then(Posts => {
      res.send(Posts);
    })
    .catch(err => {
      console.error('Error fetching users:', err);
    });
  })
  
  router.post('/postus', async (req, res) => {
      try {
          const { userId, userName, content,time} = req.body;
          // Create a new item
          const newPost = new Post({
              userId,
              userName,
              content,
              time,
          });
          const savedPost = await newPost.save();
          // Respond with the saved item
          res.status(201).json(savedPost); 
          console.log(newPost)
      } catch (err) {
          res.status(500).json({ error: 'username/email/password exist' });
      }
    });
    router.delete('/delete/:chatId', async (req, res) => {
      try {
        const { chatId } = req.params;  // Get chatId from URL parameters
        const { userId } = req.query;   // Get userId from query parameters
        console.log(chatId,userId)
        // Find the item by ID
        const item = await Post.findById(chatId);
        console.log(item)
        if (!item) {
          console.log('Item not found')
          return res.status(404).send('Item not found');
          
        }
    
        // Check if the userId matches the item's userId
        if (item.userId != userId) {
          console.log('Unauthorized: You do not have permission to delete this item')
          return res.status(403).send('Unauthorized: You do not have permission to delete this item');
        }
    
        // Delete the item if the userId matches
        await Post.findByIdAndDelete(chatId);
        res.send('Item deleted successfully');
        
      } catch (error) {
        res.status(500).send('Server error');
      }
    });
    
    
    module.exports = router;