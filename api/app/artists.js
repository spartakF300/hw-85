const express = require('express');
const router = express.Router();
const Artists = require('../model/Artists');
const path = require('path');
const multer = require("multer");
const config = require("../config");
const nanoid = require('nanoid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});
const upload = multer({storage});

router.get('/', async (req, res) => {

    const artists = await Artists.find();

    return res.send(artists);
});
router.post('/', upload.single('image'), async (req, res) => {

    const artistData = req.body;
    if (req.file) {
        artistData.image = req.file.filename
    }
    const artist = new Artists(artistData);
    try {
        await artist.save();
        return res.send({id: artist._id})
    } catch (e) {
        return res.status(400).send(e);
    }
});
router.delete('/:id',  async (req, res) => {
await Artists.findByIdAndDelete({_id: req.params.id});
    res.send('ok')
});

module.exports = router;




