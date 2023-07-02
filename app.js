/*GLOBALS - NO WINDOW

__dirname - path to current directory
__filename - file name
require - function to use modules(commonJS)
module - info about current module(file)
process - info about enviroment where the program executed

*/

/*console.log(__dirname)

setInterval(() => {
    console.log("Hello World!")
},1000)
*/

/*const names = require("./name")
const sayHi = require("./module")

console.log(names)

sayHi("John")
sayHi(names.oguz)
*/


/*OS MODULE
const os = require("os")

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system uptime: ${os.uptime} sec`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)
OS MODULE*/

/*PATH MODULE
const path = require("path")
console.log(path.sep)

const filePath = path.join("/content", "subfolder", "test.txt")
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute)
PATH MODULE*/

/*FS MODULE SYNC
const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

console.log(first, second)

writeFileSync("./content/result-sync.txt", 
`Here is the result: ${first}, ${second}`, {flag: "a"}) //default override, a is not override
FS MODULE SYNC*/

/*FS MODULE ASYNC
const {readFile, writeFile} = require("fs")

readFile("./content/first.txt", "utf8", (err, result) => {
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    const first = result
    readFile("./content/second.txt", "utf8", (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile("./content/result-async.txt", 
        `Here is the result: ${first}, ${second}`, {flag : "a"}
        , (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})
FS MODULE ASYNC */

/* HTTP MODULE */
const http = require("http")

const server = http.createServer((req,res) => {
    //console.log(req)
    if(req.url == "/"){
        res.end("Welcome to our Homepage")
    }
    if(req.url == "/about"){
        res.end("Here is our short history")
    }
    res.end(`<h1>Oops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/"> Back Home </a>`)
    
})

server.listen(5000)

/*
local dependency
npm i <package>

global dependency
npm install -g <package>
*/





