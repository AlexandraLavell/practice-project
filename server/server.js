"use strict";

const express = require("express");
const app = express();
const port = 3000;

//  import modules
const square = require("./square");

app.get("/", (req, res) => {
    // res.send("Hello World!");
    console.log("Area = ", square.area(4), " Perimeter = ", square.perimeter(4));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

