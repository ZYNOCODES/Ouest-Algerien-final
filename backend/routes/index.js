const express = require('express');
const router = express.Router();
const Place = require('../models/ArticleModel');

const { ensureAuthenticated, forwardAuthenticated } = require('../middleware/auth');

router.get("/", (req, res) => {
    return res.render('Home');
});

router.get("/user/Admin",ensureAuthenticated, (req, res) => {
    return res.render('Admin');
});

router.get("/Documents", (req, res) => {
    return res.render('Documents');
});

router.get("/Contact", (req, res) => {
    return res.render('Contact');
});
router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        await Place.findOne({_id: id}).then((result) => {
            return res.render('Documents',{place: result});
        }).catch(err => {
            res.json('error', err);
        });
    }catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;