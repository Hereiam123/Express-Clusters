//Is the file executed in master mode
const express = require("express");
const app = express();
const crypto = require("crypto");
const Worker = require("webworker-threads").Worker;

app.get("/", (req, res) => {
  const worker = new Worker(function() {});

  worker.onmessage = function() {
    this.onmessage = function() {
      postMessage();
    };
  };

  worker.postMessage();
});

app.get("/fast", (req, res) => {
  res.send("This was the quick one");
  console.log("Loaded fast");
});

app.listen(3000);
