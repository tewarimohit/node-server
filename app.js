const http = require("http");
const express = require("express"); // returns a function which we execute
const app = express();

app.use((req, res, next) => {
  // this middleware will execute for every incoming request through function, next is the function that is to be executed
  // to allow the request travel to next middleware
  console.log("in the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("in the second middleware");
});

const server = http.createServer(app);

server.listen(3000);
