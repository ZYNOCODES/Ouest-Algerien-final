const express = require('express');
const {
    GetPlaceById,
    PlaceById
} = require('../controllers/PlacesController');
const router = express.Router();

//voir place by id
router.post('/:id', PlaceById);
//get place by id
router.get('/place/:id', GetPlaceById);

module.exports = router;