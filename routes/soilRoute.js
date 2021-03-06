const express = require("express");

const soil = require('../models/soil');

const router = express.Router();

router.route('/').get(async (req,res) => {
    const soilVal = await soil.find({});
    res.render('soil_humidity', {
        soilVal
    })
});

module.exports = router;