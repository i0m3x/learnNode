//done in MonNP -Thanks H & M

//source: https://nodejs.org/api/fs.html#fs_fs_readsync_fd_buffer_offset_length_position

//fs.readSync(fd, buffer, offset, length, position)
// Returns the number of bytesRead.

// Similar to the above fs.readSync function, this version takes an optional options object. If no options object is specified, it will default with the above values.


const fs = require('fs')
// fs module
//console.log(process.argv)
//will be provided test file
//probably process.argv[2] - gets saved

// indexing an array
const response = fs.readFileSync(process.argv[2], {encoding:'utf8'}) //feed it file name
// edit
// //The split() method is used to split a string into an array of substrings, and returns the new array.
// console.log(response)
//delimiter - where to split
let lines = response.split("\n"); //array of lines, every

//this is why we need buffer
//joke
//car
//cat

console.log(lines.length-1) //24 vs 23

// for(i = begin; i <response.length; i++){

// }
//each item is a line
//naming conv - output
//need file to be put in by whatever the arg is
// read file


//cat file | wc -l

// const str = buf.toString()
// //do n as a delimiter
// //return length of the split array
// var fs = require('fs');

// const data = fs.readFileSync('./input.txt', 
//             {encoding:'utf8', flag:'r'}); 

// fs.unlink('/tmp/hello', function (err) {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });
// //use args

//run p3
// do process.argv

//so the second file is being saved as process.argv[2]