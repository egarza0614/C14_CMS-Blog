const router = require('express').Router();
const { Comment, User, Post } = require('../models');

// Get all comments for a specific post
router.get('/post/:postId', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.postId,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Post,
          attributes: ['title'],
        },
      ],
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render('postComments', {
      comments,
      loggedIn: req.session.loggedIn, // Assuming you're using session management
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id, // Assuming user_id is stored in the session
      post_id: req.body.post_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
