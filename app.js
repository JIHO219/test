const express = require("express");
const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("root");
});

app.listen(port, () => {
  console.log(port);
});
