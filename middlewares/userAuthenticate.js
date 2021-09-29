const jwt = require('jsonwebtoken')
const checkLogin = (req,res,next)=>{
    const {authorization} = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decode = jwt.verify(token, "");
        const {username, userId}=decode;
        req.username= username;
        req.userId = userId;
    } catch (err) {
        console.log(err);
    }
}

module.exports = checkLogin;