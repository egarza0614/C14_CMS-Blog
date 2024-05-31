const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Route to render the homepage with existing posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [User], // Include user data for each comment
        },
      ],
    });

    // Serialize the data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('home', {
      posts,
      loggedIn: req.session.loggedIn, // Assuming you're using session management
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to handle authentication (e.g., login)
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
module.exports = router;
