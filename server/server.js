"use strict";
const express = require("express");

const http = require("http");
const url = require("url");
const dateTime = require("./date-time-module");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Here's the date: " + dateTime.myDateTime());
    res.write(req.url);
    const q = url(parse(req.url, true).query);
    res.end();
}).listen(8080);

console.log("listening on port 8080");