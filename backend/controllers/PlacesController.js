const Place = require('../models/ArticleModel');

//get all places

//get place by id
const PlaceById = async (req, res) => {
    const {id} = req.params;
    try {
        res.redirect(`/${id}`);
    } catch (err) {
        res.json({ message: err });
    }
};
const GetPlaceById = async (req, res) => {
    const {id} = req.params;
    try {
        await Place.findOne({_id: id}).then((result) => {
            res.status(200).json({places: result});
        }).catch(err => {
            res.json('error', err);
        });
    }catch (err) {
        res.json({ message: err });
    }
};
module.exports = {
    GetPlaceById,
    PlaceById
};