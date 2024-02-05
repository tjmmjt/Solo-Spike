const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
// ! multer
    // multer is the middleware to handle multipart form data
    // initialize multer
    // then initialize storage to store image in memory instead of local storage
    // initialize upload to send storage data object
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// include upload.single('whatever you named it in your client')
// as middleware in your post
router.post('/', upload.single('image'), async (req, res) => {
    // log req.body
    console.log("Req.Body:", req.body)
    console.log("Req.File:", req.file)
    res.sendStatus(200)
})

// ! testing notes
// ? logging correct data, middleware is functioning correctly
// Req.Body: [Object: null prototype] {}
// Req.File: {
//     fieldname: 'image',
//     originalname: 'BRICKS.png',
//     encoding: '7bit',
//     mimetype: 'image/png',
//     buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 04 00 00 00 04 00 08 06 00 00 00 7f 1d 2b 83 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 20 00 ... 935348 more bytes>,
//     size: 935398
//   }


module.exports = router