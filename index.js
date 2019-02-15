process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");

//Is the file executed in master mode
if (cluster.isMaster) {
  //Index.js executed in child mode in else
  console.log("True Master");
  cluster.fork();
} else {
  const express = require("express");
  const app = express();
  const crypto = require("crypto");
  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("hello");
    });

    console.log("Loaded hashing");
  });

  app.get("/fast", (req, res) => {
    res.send("This was the quick one");
    console.log("Loaded fast");
  });

  app.listen(3000);
}
