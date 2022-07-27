const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1> My node app</h1>");
});

const port = process.env.PORT | 5000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
