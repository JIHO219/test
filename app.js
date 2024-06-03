const express = require("express");
const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("port 3333");
});

app.listen(port, () => {
  console.log(port);
});
