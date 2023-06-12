const express = require('express');
const {
    GetPlaceById,
    PlaceById
} = require('../controllers/PlacesController');
const router = express.Router();

//voir place by id
router.post('/Place/:id', PlaceById);
//get place by id
router.get('/Place/:id', GetPlaceById);
module.exports = router;