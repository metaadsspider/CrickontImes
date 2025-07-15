const express = require("express");
const cors = require("cors");
const request = require("request");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ Proxy server is running.");
});

app.get("/proxy", (req, res) => {
  const url = req.query.url;
  if (!url) return res.send("No URL provided");
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy server running");
});

