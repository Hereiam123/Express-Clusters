const cluster = require("cluster");

//Is the file executed in master mode
if (cluster.isMaster) {
  //Index.js executed in child mode in else
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  cluster.on("death", function(worker) {
    console.log("worker " + worker.pid + " died");
  });
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

  app.get("/fast", (req, res) => {
    res.send("This was the quick one");
  });

  app.listen(3000);
}
