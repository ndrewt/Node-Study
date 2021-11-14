const path = require('path');
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const mainData = require('./routes/main');
const AddedUsers = require('./routes/AddUsers');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(mainData)
app.use(AddedUsers.routes)

app.use((req,res,next)=>{
res.status(404).render('404.pug',{Title:'Page Not Found'})
})

app.listen(3000)