const fs = require('fs')
    //console.log(req.url, req.method, req.headers)
    //if (req.method) console.log('Method is:', req.method)
    //if (req.headers) console.log('Header is:', req.headers)
const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Enter message</title>')
        res.write('<body><h1><form action="/message" method= "POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>')
        res.write('</html>')
        return res.end()
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
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302
                res.setHeader('location', '/')
                return res.end()
            })

        })


    }
}
module.exports = {
    handler: requestHandler,

}