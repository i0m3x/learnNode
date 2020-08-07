//completed with Eboni, Tal, Billy, and Charlie

const net = require('net')
const port = process.argv[2]
const server = net.createServer((socket) => {
    const date = new Date()
    let dateStr = `${date.getFullYear()}-${date.getMonth().length === 2 ? Number(date.getMonth() + 1) : '0' + Number(date.getMonth() + 1)}-${date.getDate().length === 2 ? date.getDate() : '0' + date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`
    socket.write(dateStr)
    socket.end()
})
server.listen(port)