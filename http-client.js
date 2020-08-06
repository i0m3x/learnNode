// Write a program that performs an HTTP GET request to a URL provided
// to you as the first command-line argument. (argv[2]) 

//Write the String contents
// of each "data" event from the response to a new line on the console
// (stdout).
const http = require('http')

//node http-client.js url
http.get(process.argv[2], (response) => {

    //this is like '.then'
    response.on('data', (data) =>
   console.log(data.toString())
    )
})


//http://api.opencorporates.com/v0.4/companies/search?q=barclays+bank