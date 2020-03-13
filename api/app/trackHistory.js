const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require('../model/User');
const TrackHistory = require('../model/TrackHistory');
const authorization = require('../middleware/Authorization');

router.get('/',authorization,async (req,res)=>{
   try{
       const trackData = await TrackHistory.find().populate('user').populate('track');
       res.send(trackData)
   }catch (error) {
       res.status(500).send({error: error})
   }

});

router.post('/',authorization, async (req, res) => {
    const trackData = req.body;
    trackData.user = req.user._id;
    try {
        const trackHistory = new TrackHistory(trackData);
        await trackHistory.save();
        return  res.send({id:trackHistory._id})
    } catch (error) {
        return res.status(400).send({error: error})
    }
    
    
});
module.exports = router;