//This is how we can create a server in node.js

const http = require("http")

const server = http.createServer((req,res) => {
    res.end("Hello World")
})

server.listen(3000)

// Here 3000 is the custom port that we selected