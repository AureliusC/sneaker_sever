const jwt = require('jsonwebtoken');
const user = require('../db').import('../models/user');

const validateSession =(req,res, next) =>{
    const token =req.headers.authorization;
   console.log('token -->', token);
    if(!token){
        return res.status(403).send({auth:false,message:"No token provided "})
    }else{
        jwt.verify(token,process.env.JWT_SECRET, (err, decodeToken) => {
            console.log('decodeToken-->',decodeToken);
            if(!err && decodeToken){
                user.findOne({
                    where:{
                        id:decodeToken.id
                    }
                })
                .then(user =>{
                   
                    if(!user) throw err;
                    console.log('user-->',user);
                    req.user =user;
                    console.log('next-->',next);
                    return next();
                })
                .catch(err => next(err));
            } else {
                req.errors =err;
                return res.status(500).send('Not Authorized');
            }
        });
    }
};

module.exports = validateSession;