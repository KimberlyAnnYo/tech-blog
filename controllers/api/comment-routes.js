const router = require('express').Router();
const Comment = require('../../models/comment');
const User = require('../../models/user');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
 try{ 
  const commentData = await Comment.findAll({
    include: [User],
    where: {
      postId: req.params.id,
    },
  });
// serialize the data
  const comments = commentData.map((comment) => comment.get({ plain: true }));

  console.log(comments);
  
  res.render('single-post', {comments, postId:req.params.id, loggedIn: req.session.loggedIn});
} catch(err) {
    res.status(500).json(err);
    console.log(err)
}
});

router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  console.log(body);
  try {
    const newComment = await Comment.create({
      ...body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;