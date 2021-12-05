const express = require('express');
const {check,body} = require('express-validator/check')

const authController = require('../controllers/auth');
const User =require('../models/user')

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login',
[body('email','Please enter a valid email!')
  .isEmail()
  .custom((value,{req})=>{
      return User.findOne({ email: value })
        .then(userDoc => {
          if (!userDoc) {
          return Promise.reject('Email not exists ,please enter a real one')
        }
    })
    }),
 body('password','Please enter a password with numbers and text at least 5 characters!')
 .isLength({min:5})
 .isAlphanumeric()
  
], authController.postLogin);

router.post('/signup',[check('email')
.isEmail()
.withMessage('Please enter a valid email!')
.custom((value,{req})=>{
/*if(value === 'and1tarnavskyi@gmail.com'){
 throw new Error('Email if forbidden')
}
return true*/
  return User.findOne({ email: value })
    .then(userDoc => {
      if (userDoc) {
      return Promise.reject('Email exists ,please enter a different one')
    }
})
})
,body('password','Please enter a password with numbers and text at least 5 characters!')
.isLength({min:5})
.isAlphanumeric()
],body('confirmPassword').custom((value,{req})=>{
    if(value!==req.body.password){
        throw new Error('Password have to match!')
    }
    return true
})
, 
authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;
