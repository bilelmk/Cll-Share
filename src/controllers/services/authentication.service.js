
let jwt = require('jsonwebtoken');
const config = require('../../config.js');
const Member=require('../../models/member')
const bcrypt=require('bcryptjs')


export const authGuard = (req,res,next) => {
    //not implimented yet
    let token = req.headers['x-access-token'] || req.headers['authorization']; 
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
    // const userIsAuthenticated = false
    // //raise error if not authenticated
    // return userIsAuthenticated
}
export const authneticatedUserIsAdmin = (params) => {
    //not implimented yet
    let isAdmin = false
    //return true if admin else false
    return isAdmin
}
export const authneticatedUserShouldBeAdmin = (params) => {
    //not implimented yet
    let isAdmin = true
    if (!isAdmin) throw new Error('Authentication Required')
    return isAdmin
}

export const getAthenticatedUser = (requestHeader) => {
    user = null
    return user
}

export const signIn = (req,res,next) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password){
    Member.findOne({mail:username})
        .then(user=>{
            if(!user){
                res.send(403).json({
                    success: false,
                    message: 'Incorrect username'
                  });
            }
            bcrypt.compare(password,user.password)
                .then(match=>{
                    if(!match) return res.send(403).json({
                        success: false,
                        message: 'Incorrect password'
                      });
                })
                let token = jwt.sign({username: username},
                    config.secret,
                    { expiresIn: '24h' // expires in 24 hours
                    }
                  );
                  // return the JWT token for the future API calls
                  res.json({
                    success: true,
                    message: 'Authentication successful!',
                    token: token
                  });
        })
        .catch((err) => { res.status(400).json('Error: ' + err) })

    }else{
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });}
    
}

export const signUp = (data) => {
    throw new Error ('signUn not implemented yet')
}
