const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
  

    const postData = await Post.findAll({
      where:{"userId": req.session.userId},
      include: [User]
    });
   
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});


router.get('/createpost', withAuth, (req, res) => {
 
  res.render('createpost', {
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
   
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
    
      const post = postData.get({ plain: true });
      console.log(post);
      
      res.render('edit',  {
        post,
        loggedIn: req.session.loggedIn
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;