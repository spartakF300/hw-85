const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();


const User = require('../model/User');


router.post('/', async (req, res) => {
    const user = new User(req.body);

    try {

        user.generateToken();
        await user.save();
        return res.send(user)

    } catch (error) {

        return res.status(400).send(error)
    }
});

router.post('/sessions', async (req, res) => {
    const user = await User.findOne({username: req.body.username});

    if (!user) {
        return res.status(400).send({error: 'username or password not correct!!!'})
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
        return res.status(400).send({error: 'username or password not correct!!!'})
    }
    user.generateToken();
    await user.save();

    return res.send({token: user.token})
});

module.exports = router;