

//import noded modules
const express = require("express");
const morgan = require("morgan");

// WEATHER STUFF TO BE REMOVED
// const amqp = require("amqp");
// const crypto = require("crypto");
// const EventEmitter = require("events");
// const url = require("url");
// const {name: APPLICATION, version: VERSION} = require("./package.json");
// const AMQP_TOPIC_PREFIX = "v02.post";
// const AMQP_EXCHANGE = "xpublic";
// const AMQP_HEARTBEAT = 300;

function random_string() {
    return crypto.pseudoRandomBytes(8).toString("hex");
}

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  .get("/joke/:type", handleJoke)


  .listen(8000, () => console.log(`Listening on port 8000`));

