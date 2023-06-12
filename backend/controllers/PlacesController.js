const Place = require('../models/ArticleModel');

//get all places

//get place by id
const PlaceById = async (req, res) => {
    const {id} = req.params;
    try {
        res.redirect(`/Place/${id}`);
    } catch (err) {
        res.json({ message: err });
    }
};
const GetPlaceById = async (req, res) => {
    const {id} = req.params;
    try {
        const place = await Place.findById({_id: id});
        res.status(200).json({place: place});
    } catch (err) {
        res.json({ message: err });
    }
};
module.exports = {
    GetPlaceById,
    PlaceById
};