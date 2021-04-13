const http = require('http');
const fs = require('fs');
const usersJSON = require('./users.json');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        switch (req.url) {
            case "/":
            case "/index.html":
                fs.readFile("./index.html", (err, content) => {
                    if (content) {
                        res.writeHead(200, { "Content-Type": "text/html" });
                        res.end(content, "utf-8");
                    }
                    else {
                        res.writeHead(500);
                        res.end("error: " + err.code);
                    }
                });
                break;
            case "/index.css":
                fs.readFile("./index.css", (err, content) => {
                    if (content) {
                        res.writeHead(200, { "Content-Type": "text/css" });
                        res.end(content, "utf-8");
                    }
                    else {
                        res.writeHead(500);
                        res.end("error: " + err.code);
                    }
                });
                break;
            case "/raw-html":
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end("<h1>Raw HTML Page</h1>", "utf-8");
                break;
            case "/users":
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(usersJSON), "utf-8");
                break;
            
            case "/index.js":
                res.writeHead(200, { "Content-Type": "body" });
                res.end( "utf-8");
                break;
            
            default:
                res.writeHead(404);
                res.end("Error 404");
                break;
        }
    }
    else {
        res.writeHead(405);
        res.end(" GET requests only");
    }
});

server.listen(port, () => console.log("you are in port: " + port));