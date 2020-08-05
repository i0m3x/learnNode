// Create a program that prints a list of files in a given directory,   
// filtered by the extension of the files

//What is process.argv[2]?
//process.argv = ['node', 'yourscript.js', ...]
//source: https://stackoverflow.com/questions/22213980/could-someone-explain-what-process-argv-means-in-node-js-please

//const filteredList = require ('./my-module.js') Once you do so, you have access to all its methods, which include: fs.access(): check if the file exists and Node can access it with its permissions; fs.appendFile(): append data to a file. If the file does not exist, it's created;

const filteredList = require('./mymodule')
// const { isRegExp } = require('util')

                //fileDir       file&|type
filteredList(process.argv[2], process.argv[3], (err,data) => {
    if(err){
        console.log(err)
    }
    //iterate
    for (let file of data){
        console.log(file)
    }
}
)

        
// You must not print directly to the console from your module file,    
// only from your original program.      


//RANDOM NOTES:
// example from previous:
// function filter(dir,extensionFilter){
//     const fs = require('fs')
//     fs.readFile(process.argv[2], {encoding:'utf-8'}, (err, data))
//     console.log(listofFiles)

// }

// export
// singleFunc(dir,filenameExtension,cb)

//  1. Export a single function that takes exactly the arguments        
//     described.                                                       
//  2. Call the callback exactly once with an error or some data as     
//     described.                                                       
//  3. Don't change anything else, like global variables or stdout.     
//  4. Handle all the errors that may occur and pass them to the callbac

//https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/

//To sum up, when to use module.exports vs exports:

// Use exports to:

// Export named function. e.g. exports.area, exports.circumference.

// Use module.exports to:

// If you want to export an object, class, function at the root level (e.g. module.exports = Cat)

// If you prefer to return a single object that exposes multiple assignments. e.g.module.exports = {area, circumference};
