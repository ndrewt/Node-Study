const express = require('express')
const app = express()

app.use('/users', (req, res, next) => {
    console.log('It s works!!!')
    res.send('<h1 align = "center">Page for users</h1>')

})

app.use('/', (req, res, next) => {
    console.log('It s 2!!!')
    res.send('<h1 align = "center">The "/" page </h1>')
})


app.listen(3000)