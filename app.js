const express = require("express");
const app = express();
const data = require("./data");
const cors = require('cors');

const port = 3000;
const frontendPort = 8080;
const corsOptions = {
  origin: `http://localhost:${frontendPort}`,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/projects", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
