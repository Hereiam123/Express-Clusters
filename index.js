const cluster = require("cluster");

//Is the file executed in master mode
if (cluster.isMaster) {
  //Index.js executed in child mode in else
  cluster.fork();
} else {
  const express = require("express");
  const app = express();
  function doSomething(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get("/", (req, res) => {
    doSomething(5000);
    res.send("hello");
  });

  app.listen(3000);
}
