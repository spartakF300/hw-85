const User = require("../model/User");


const authorization = async (req, res, next)=>{
    const authorizationHeader = req.get('Authorization');

    if (!authorizationHeader) {
        return res.status(401).send({error: 'No authorizations header'});
    }
    const [type, token] = authorizationHeader.split(' ');

    if (type !== 'Token' || !token) {
        return res.status(401).send({error: 'Token error'});
    }
    const user = await User.findOne({token});

    if (!user) {
        return res.status(401).send({error: 'Token incorrect'})
    }
    req.user = user;
    next();
};
module.exports = authorization;
