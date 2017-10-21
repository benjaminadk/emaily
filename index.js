const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "dude" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
