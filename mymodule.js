// Create two files named make-it-modular.js and mymodule.js.           
//fs is module allows you to read, write update files on comp                                                  
// The module must export a single function that takes three 
const fs = require("fs");
function filteredList(dir, extensionEnding, cb){
    fs.readdir(dir, (err, data) =>  { //reads contents of a dir
        const files = []
        if(err){
            return cb(err)
        }
        //iterate through list of files
        // for(let eachFile =0; eachFile<data.length; eachFile++){ CAN'T USE FOR B/C DOES NOT ALLOW FOR EDGE CASE OF NO FILES
        
        for (let eachFile of data){
            if(eachFile.split('.')[1] === extensionEnding) {
                files.push(eachFile)
            }
        }
        cb(err,files)
    } )                   
   
    }


// The module must export a single function that takes three arguments: 
module.exports = filteredList
// The callback function must be called using the idiomatic node(err,   
// data) convention. This convention stipulates that unless there's an  
// error, the first argument passed to the callback will be null, and   
// the second will be your data. In this exercise, the data will be     
// your filtered list of files, as an Array. If you receive an error,   
// e.g. from your call to  fs.readdir(), the callback must be called    
// with the error as the first and only argument.                       
                                                                     
// You must not print directly to the console from your module file,    
// only from your original program.                                     
                                                                     
// In the case of an error bubbling up to your original program file,   
// simply check for it and print an informative message to the console. 
                                                                     
// These four things are the contract that your module must follow.     
                                                                     
//  1. Export a single function that takes exactly the arguments        
//     described.                                                       
//  2. Call the callback exactly once with an error or some data as     
//     described.                                                       
//  3. Don't change anything else, like global variables or stdout.     
//  4. Handle all the errors that may occur and pass them to the callbac
                                                                     
                                                                     
// The benefit of having a contract is that your module can be used by  
// anyone who expects this contract. So your module could be used by    
// anyone else who does learnyounode, or the verifier, and just work.   
                                                                     