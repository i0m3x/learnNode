sum = 0
for (let i = 2; i <process.argv.length; i++){
    sum += parseInt(process.argv[i])
    
}

//Heather and Mike
// like python, providing two scripts in terminal call
// basically sum 
// argv = array
// since this is JS you can put anything in an array
// f == fabulous
// 2 to the end
// for this particular test case
// not practical

// others would slice off first two args
// reduce
// step-by-step

console.log(sum) //6

// learnyounode verify filename
// like python3