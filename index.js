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
