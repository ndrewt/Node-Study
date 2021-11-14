const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const AddedUsers =require('./AddUsers.js')

const router = express.Router();

router.get('/users', (req, res, next) => {
    const user = AddedUsers.user
    res.render('Main.pug',{Users: user , Title: 'Users List',path:'/users'});
    console.log(user)
  })


  module.exports = router;


