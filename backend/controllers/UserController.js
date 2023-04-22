const User = require('../models/UserModel');
const Article = require('../models/ArticleModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

//jwt secret
const createToken = (id) => {
    return jwt.sign({_id: id}, process.env.SECRET_KEY, {expiresIn: '7d'});
}
//login
const Login = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({email,token});
    }catch(err){
        res.status(400).json({err: err.message});
    }
}   

//signup
const Signup = async (req, res) => {
    const { email, password} = req.body;
    try{
        const user = await User.signup(email, password);
        const token = createToken(user._id);
        res.status(200).json({email,token});
        
    }catch(err){
        res.status(400).json({err: err.message});
    }
}

//get all articles
const GetAllArticles = async (req, res) => {
    const articles = await Article.find({}).sort({createdAt: -1});
    res.status(200).json(articles);
}

//get a specific article
const GetArticle = async (req, res) => {
    const {id} = req.params;
    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err: 'article not found'});
    }
    //find id in db
    const article = await Article.findById(id);
    //if not found return error
    if(!article){
        return res.status(404).json({err: 'article not found'});
    }
    //return article
    res.status(200).json(article);
}

//create a new article
const CreateNewArticle = async (req, res) => {
    //get data from request
    const {title, description} = req.body;
    //add to db
    try{
        const article = await Article.Create(title, description);
        res.status(200).json({article});
    }catch(err){
        res.status(400).json({err: err.message});
    }
}

//delete a article
const DeleteArticle = async (req, res) => {
    const {id} = req.params;
    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err: 'article not found'});
    }
    //find id in db and delete
    const article = await Article.findByIdAndDelete({_id: id});
    //if not found return error
    if(!article){
        return res.status(404).json({err: 'article not found'});
    }
    //return article
    res.status(200).json(article);
}

//update a article
const UpdateArticle = async (req, res) => {
    const {id} = req.params;
    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err: 'article not found'});
    }
    //find id in db and update
    const article = await Article.findOneAndUpdate({_id: id},
        {...req.body}
    );
    //if not found return error
    if(!article){
        return res.status(404).json({err: 'article not found'});
    }
    //return article
    res.status(200).json(article);
}

module.exports = {
    Login,
    Signup,
    GetAllArticles,
    GetArticle,
    CreateNewArticle,
    DeleteArticle,
    UpdateArticle
}