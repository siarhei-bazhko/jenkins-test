const express = require("express");

const PORT = 8888;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Hello world");
});

module.exports = app.listen(process.env.PORT || PORT, () =>
  console.log(`Running on http://localhost:${PORT}`)
);