const express = require('express');
const requireAuth = require('../middleware/requireAuth');
const {
    Login,
    Signup,
    GetAllArticles,
    GetArticle, 
    CreateNewArticle,
    DeleteArticle,
    UpdateArticle
} = require('../controllers/UserController');
const router = express.Router();

//login
router.post('/login', Login);

//signup
router.post('/signup', Signup);

//require authentication
router.use(requireAuth);

//get all users
router.get('/', GetAllArticles);

//get a specific user
router.get('/:id', GetArticle);

//post a user
router.post('/Create',CreateNewArticle);

//delete a user
router.delete('/:id', DeleteArticle);

//update a user
router.patch('/:id', UpdateArticle);

module.exports = router;