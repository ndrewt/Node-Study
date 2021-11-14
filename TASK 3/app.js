const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/add', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'add.html'))
})
app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'))

})

app.listen(3000)