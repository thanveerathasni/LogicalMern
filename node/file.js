const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.send("Please provide a name");
  }

  fs.writeFile("name.txt", name, err => {
    if (err) return res.send("Error writing file");
    res.send("File written successfully");
  });
});

app.listen(9000, () => {
  console.log("Server running on port 9000");
});