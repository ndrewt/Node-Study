const http = require('http')
const fs = require('fs')
    //const routes = require('./create-user')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Hello User!</title></head>')
        res.write('<body>' + '<h3>HELLO THERE ENTER YOUR USERNAME</h3>' +
            '<h1><form action="/message" method= "POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>')
        res.write('</html>')
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]

            fs.writeFile('create-user.txt', message, err => {
                res.statusCode = 302
                res.setHeader('location', '/')
                return res.end()
            })
        })
    }



})
server.listen(3000)