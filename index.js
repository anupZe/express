const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(" DevOps engineer doesn't sleep, he waits for build to finish 😴",
    "Works on my machine 😎",
    "Did you try turning it off and on again? 🔌  ");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});