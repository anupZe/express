const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi baby i am a how are you ");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});