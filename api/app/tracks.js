const express = require('express');
const router = express.Router();
const Albums = require('../model/Album');

const Track = require('../model/Track');


router.get('/', async (req, res) => {
    let params = null;
    if (req.query.album) {
        params = {album: req.query.album}
    }
    if (req.query.artist) {
        const albums = await Albums.find({artist: req.query.artist});

        const tracks = await Promise.all(albums.map(async (item) => {
            return await Track.find({album: item._id})
        }));

        return res.send(tracks.flat( ))
    } else {
        try {
            const tracks = await Track.find(params);
            return res.send(tracks);

        } catch (e) {
            return res.status(404).send(e);
        }
    }

});

router.post('/', async (req, res) => {

    try {
        const tracks = await Track.find();
        console.log(tracks);
        req.body.number = tracks.length+1;
        const track = new Track(req.body);
        track.save();
        res.send({_id: track._id})
    } catch (e) {
        res.status(404).send(e);
    }

});
router.delete('/:id',  async (req, res) => {
    await Track.findByIdAndDelete({_id: req.params.id});
    res.send('ok')
});


module.exports = router;