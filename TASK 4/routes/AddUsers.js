const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

const user = [];

router.get('/',(req,res,next)=>{
res.render('addUsers.pug',{Title:'Add Users'})

})
router.post('/',(req,res,next)=>{
    user.push({ title: req.body.title })
    res.redirect('/users')
})


exports.routes = router;
exports.user = user;

