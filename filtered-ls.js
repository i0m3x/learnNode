//print list
//mistakes: read up on fs.readdir(path[, options], callback), didn't assign process.argv[3]
//file:///C:/Users/Mizgino/Documents/javascript/learnyounode/docs-nodejs/fs.html#fs_fs_readfile_path_options_callback

//referred to: https://github.com/pjz987/mylearnyounode/blob/master/filtered-ls.js#L8

//fs.readdirSync(path[, options])
// READDIR: The optional options argument can be a string specifying an encoding, or an object with an encoding property specifying the character encoding to use for the filenames returned. If the encoding is set to 'buffer', the filenames returned will be passed as Buffer objects.

// If options.withFileTypes is set to true, the result will contain fs.Dirent objects.

//OG: https://www.npmjs.com/package/learnyounode

//DIRECTIONS:   Create a file named filtered-ls.js.

//   Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a
//   directory name as the first argument to your program (e.g.
//   '/path/to/dir/') and a file extension to filter by as the second
//   argument.

//   For example, if you get 'txt' as the second argument then you will
//   need to filter the list to only files that end with .txt. Note that
//   the second argument will not come prefixed with a '.'.

//   Keep in mind that the first arguments of your program are not the
//   first values of the process.argv array, as the first two values are
//   reserved for system info by Node.

//   The list of files should be printed to the console, one file per
//   line. You must use asynchronous I/O.

//const fs = require ('fs') Once you do so, you have access to all its methods, which include: fs.access(): check if the file exists and Node can access it with its permissions; fs.appendFile(): append data to a file. If the file does not exist, it's created;

const fs = require("fs");

//filter by
// argv2 is the directory
// argv3 is what we are searching against
fs.readdir(process.argv[2], (err, list) => {
if(err){
    console.log(err)
}


const extension = process.argv[3] //assign element 3 to var, in example it is.md file
for(let i=0; i < list.length; i++){
    // make var
    const currentFile = list[i]
    // this represents the file

    //let's break up the file
    if(currentFile.split('.')[1] === extension){
        console.log(currentFile)
    }
    
}

})

//given path
//https://nodejs.org/api/path.html


// The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than the first character of the basename of path (see path.basename()) , an empty string is returned.
//add file extension

//async

// fstat.readdir('../javascript/batman/', '.txt', (err, list){
    
// })

