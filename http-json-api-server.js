const http = require('http')
const url = require('url')
const port = process.argv[2]
const server = http.createServer((req, res) => {
    req.setEncoding('utf-8')
    res.writeHead(200, {'Content-Type': 'application/json'})
    const url = new URL('http://localhost:' + port + req.url)
    const endpoint = url.pathname
    const iso = url.searchParams.get('iso')
    const date = new Date(iso)
    if (endpoint === '/api/parsetime') {
        console.log(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }))
        res.write(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }))
    } else if (endpoint === '/api/unixtime') {
        res.write(JSON.stringify({
            unixtime: date.getTime()
        }))
    }
    res.end()
})
server.listen(port)