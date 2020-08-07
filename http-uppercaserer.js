const http = require('http')
const port = process.argv[2]
const server = http.createServer((request, response) => {
    request.setEncoding('utf-8')
    request.on('data', (data) => {
        response.write(data.toUpperCase())
    })
})
server.listen(port)