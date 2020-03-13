const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const config = require("./config");
const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');
const users = require('./app/users');
const trackHistory = require('./app/trackHistory');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect('mongodb://localhost/music', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    });

    app.use('/artists', artists);
    app.use('/albums', albums);
    app.use('/tracks', tracks);
    app.use('/users', users);
    app.use('/track_history',trackHistory)

    app.listen(config.port, () => {
        console.log(`HTTP Server started on ${config.port} port!`);
    })
};
run().catch(e => {
    console.error(e)
});