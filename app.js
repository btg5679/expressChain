const express = require("express");
const bodyParser = require("body-parser");
const ExpressNode = require("./expressNode");

const port = 18070 + Math.floor(Math.random() * 30);
console.log("starting node on ", port);
let node1 = new ExpressNode(port);

node1.init();

const http_port = 3000 + Math.floor(Math.random() * 10);

let ExpressHTTP = function() {
  const app = new express();

  app.use(bodyParser.json());

  app.get("/addNode/:port", (req, res) => {
    console.log("add host: " + req.params.port);
    node1.addPeer("localhost", req.params.port);

    res.send();
  });

  app.get("/spawnBlock/:newBlock", (req, res) => {
    let newBlock = node1.createBlock(req.params.newBlock);
    console.log("block created");
    res.send();
  });

  app.listen(http_port, () => {
    console.log(`http server up.. ${http_port}`);
  });
};

let httpserver = new ExpressHTTP();
