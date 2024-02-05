const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.post('/', async (req, res) => {
    // log req.body
    console.log("Req.Body:", req.body)
    res.sendStatus(200)
})

module.exports = router