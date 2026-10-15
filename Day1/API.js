// A simple Node.js example of how a server can provide data through an API

const http = require("http")
const { name } = require("pug")

const server = http.createServer((req,res) => {
    res.setHeader("Content-Type", "application/json")

    res.end(JSON.stringify({
        name: "Malik",
        age: 25
    }))
})

server.listen(3000)