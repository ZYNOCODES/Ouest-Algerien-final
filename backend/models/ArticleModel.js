const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
},{timestamps: true});

// static method to create a new article
ArticleSchema.statics.Create = async function(title, description){
    
    // validation
    if(!title || !description){
        throw Error('All fields mast be filled');
    }

    // check if article already in use
    const exist = await this.findOne({title});
    
    if(exist){
        throw Error('Article already in use');
    }

    // create article
    const article = await this.create({title, description});
    
    return article;
}

const article = mongoose.model('articles', ArticleSchema);

module.exports = article;