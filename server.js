const http = require("http");
const port = 8005
const nodemon = require('nodemon')

const server = http.createServer((req, res)=>{
    if(req.method === "GET"){
        if(req.url === 'getAll'){
            res.write(JSON.stringify('7777'))
        }
      
    }
    res.end()
})


server.listen(port, ()=>{
    console.log('port is ' + port)
})