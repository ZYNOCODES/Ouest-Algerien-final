const express = require('express');
const router = express.Router();
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

module.exports = router;