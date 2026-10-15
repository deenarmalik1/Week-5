// Simple Node.js example for HTTP request and response:

const http = require("http")

const server = http.createServer((req,res)=>{
    res.writeHead(200, { "Content-Type":"text-plain"})
    res.end("Hello")
})

server.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000")
}) 


