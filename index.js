console.log("Hello World")

//request -> response => server
//http server 

var http = require("http") // node modules => http, fs, os
var fs = require("fs")

//HTTP SERVER
var server = http.createServer((req, res) => {
    

    if(req.url == "/"){
        fs.readFile("index.html", (err, html) => {
            console.log(req.url + "works")
            res.write(html)
            res.end()
        })
    }
    else if(req.url == "/products"){
        fs.readFile("products.html", (err, html) => {
            console.log(req.url + "works")
            res.write(html)
            res.end()
        })
    }
    else{
        fs.readFile("404.html", (err, html) => {
            console.log(req.url + "works")
            res.write(html)
            //res.end()
        })
    }
    
    //res.end()
})

server.listen(5000, () => {
    console.log("node.js server at port 5000")
})
//HTTP SERVER