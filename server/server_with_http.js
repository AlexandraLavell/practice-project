"use strict";

// load http module
const http = require("http");

// set hostname and port
const hostname = "localhost";
const port = 8000;

// create HTTP server
const server = http.createServer((req,res) => {

    // set response HTTP header with HTTP status and content type
    res.writeHead(200, {"Content-Type" : "text/plain"});

    // send response body
    res.end("Hello World");
});

// Output a log once the server is up and listening
server.listen(port, hostname, () => {
                console.log(`Server listening at http://${hostname}:${port}/`)});



// const url = require("url");
// const dateTime = require("./date-time-module");
// const fs = require("fs");

// http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.write("Here's the date: " + dateTime.myDateTime());
//     res.write(req.url);
//     const q = url(parse(req.url, true).query);
//     res.end();
// }).listen(8080);

// console.log("listening on port 8080");