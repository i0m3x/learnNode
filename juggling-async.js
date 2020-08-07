const http = require('http')
const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]
const urlArr = [url1, url2, url3]
const stringArr = ['', '', '']
let counter = 0
for (let i=0; i<urlArr.length; i++) {
    const url = urlArr[i]
    http.get(url, (response) => {
        let str = ''
        response.setEncoding('utf-8')
        response.on('data', (data) => {
            str += data
        })
        response.on('end', () => {
            counter++
            stringArr[i] = str
            if (counter === stringArr.length) {
                stringArr.forEach((string) => console.log(string))
            }
        })
    })
}

// const http = require('http')
// // const bl = require('bl')

// const u1 = process.argv[2]
// const u2 = process.argv[3]
// const u3 = process.argv[4]
// const URLS = [u1,u2,u3] //set array
// let firstThree = ["","",""] //create an empty array to add things to



// let count = 0 //check how many you have
// for(let i=0; i<URLS.length; i++){
//     const url = URLS[i]
//     http.get(url, (response) => {
//         let str = ''
//         response.setEncoding('utf-8') // translate to writeable format
//         response.on('data', (data) => {
//             str += data //add the data stream
//         })
//         response.on('end', () => {
//             count++ //keep count to see if there are three
//             firstThree[i] = str
//             if(count == firstThree.length) {
//                 firstThree.foreEach((string) => console.log(string))
//             } //no else needed
//         })
//     })
// }

//all my gibberish
// http.get(firstThree, (response) => {
// response.on('data', (data))
// }

// const jug((u1,u2,u3), cb)=> {

// }
// //print in order
// const all = pipe(bl(data))

// //disregard length
// console.log(all.split(' '))

//Description: End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.