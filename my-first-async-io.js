//Thanks, Pete! Aug 4
//showed me how to type 'node my...js'
//helped me read what's going on
// fs.readFile(path[, options], callback)

//The callback is passed two arguments (err, data), where data is the contents of the file.

// If no encoding is specified, then the raw buffer is returned.

// If options is a string, then it specifies the encoding:

// fs.readFile('/etc/passwd', 'utf8', callback);

// When the path is a directory, the behavior of fs.readFile() and fs.readFileSync() is platform-specific. On macOS, Linux, and Windows, an error will be returned. On FreeBSD, a representation of the directory's contents will be returned.

// fs.readFile()

//collect value from callback

const fs = require('fs') //does not read
fs.readFile(process.argv[2], {encoding:'utf-8'}, // argv2 is the directory
(err, data) => {

    // console.log("This is the response : " + data)
    //data is not a string
    //use Buffer

    let lines = data.split('\n')
    console.log(lines.length-1)
    //length -1 b/c it adds additional line for\n
})

//instead of using the return value of this
// method you need to collect the value from a callback function
// that you pass in as the second argument. To learn more about

// callbacks, check out:
// var fs = require('fs')
// var myNumber = undefined

// function addOne(callback) {
//   fs.readFile('number.txt', function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents)
//     myNumber++
//     callback()
//   })
// }

// function logMyNumber() {
//   console.log(myNumber)
// }

// addOne(logMyNumber)