const express = require("express");
const app = express();
const path = require("path");
const port = 3001;

const distReactPath = "/dist-react";
const distAngularPath = "/dist-angular";
const distVuePath = "/dist-vue";

// In each client the basePath should be set according to these
app.use("/react", express.static(path.join(__dirname, distReactPath)));
app.use("/angular", express.static(path.join(__dirname, distAngularPath)));
app.use("/vue", express.static(path.join(__dirname, distVuePath)));

// Routes
app.get("/react-app", (req, res) => {
  res.sendFile(path.join(__dirname, distReactPath + "/index.html"));
});
app.get("/ng-app", (req, res) => {
  res.sendFile(path.join(__dirname, distAngularPath + "/index.html"));
});
app.get("/vue-app", (req, res) => {
  res.sendFile(path.join(__dirname, distVuePath + "/index.html"));
});
app.get("/", (req, res) => {
  res.send(
    '<div><a href="/ng-app">Angular</a></div><a href="/react-app">React</a><div><a href="/vue-app">Vue</a></div>'
  );
});

app.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
);
