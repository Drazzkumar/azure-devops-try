const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send(`hello ${process.env.NAME}`);
});

app.listen(PORT, () => console.log(`APP is running on port ${PORT}`));
