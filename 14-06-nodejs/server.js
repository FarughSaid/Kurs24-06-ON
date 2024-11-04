const http = require('http');
console.log("Server is Online")
const server = http.createServer((req, res) => {
    console.log(req)
    res.end("Hello From Node.js")
})

server.listen(4000)
