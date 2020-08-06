// Write a program that performs an HTTP GET request to a URL provided
// to you as the first command-line argument. Collect all data from the
// server (not just the first "data" event) and then write two lines to
// the console (stdout).

// The first line you write should just be an integer representing the
// number of characters received from the server. The second line
// should contain the complete String of characters sent by the server.

// original buffers are kept intact and copies are only done as necessary. 


//buffer: byte stream

//http: converts buffer into stream


const http = require('http')
http.get(process.argv[2], (response) => {


    //concatenating pieces of the var bit by bit
    //BL does this for you
    let allData = ''
    response.on('data', (data) => {
        allData += data
    })
    //response is a stream
    response.on('end', () => {
        console.log(allData.length)
        console.log(allData)
    })
}


)

// λ node http-collect.js
// events.js:291
//       throw er; // Unhandled 'error' event
//       ^

// Error: connect ECONNREFUSED 127.0.0.1:80
//     at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1144:16)
// Emitted 'error' event on ClientRequest instance at:
//     at Socket.socketErrorListener (_http_client.js:469:9)
//     at Socket.emit (events.js:314:20)
//     at emitErrorNT (internal/streams/destroy.js:100:8)
//     at emitErrorCloseNT (internal/streams/destroy.js:68:3)
//     at processTicksAndRejections (internal/process/task_queues.js:80:21) {
//   errno: -4078,
//   code: 'ECONNREFUSED',
//   syscall: 'connect',
//   address: '127.0.0.1',
//   port: 80
// }

//SECOND SOLUTION
// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//     response.pipe(bl(function(err,data){ //allows it to be writeable
//         if(err){
//             return console.error(err)
//         }
//         data =data.toString()
//         console.log(data.length)
//         console.log(data)
//     }))
// })