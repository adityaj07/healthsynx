const express = require("express")
const server = express()

//bodyParser
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Jai Shri Ram')
  })
  
server.listen(3000, () => {
    console.log("Server Started on port 3000...");
  })