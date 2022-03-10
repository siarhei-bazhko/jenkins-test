const express = require("express");

const PORT = 8888;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Hello world");
});

app.get("/beef", (req, res) => {
  res.status(200).json("This is beef");
});

module.exports = app.listen(process.env.PORT || PORT, () =>
  console.log(`Running on http://localhost:${PORT}`)
);