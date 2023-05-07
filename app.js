// const http = require("http");
const express = require("express"); // returns a function which we execute
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

// app.use((req, res, next) => {
//   // this middleware will execute for every incoming request through function, next is the function that is to be executed
//   // to allow the request travel to next middleware in line
//   console.log("in the middleware");
//   next();
// });

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found...</h1>");
});

// const server = http.createServer(app);

app.listen(3000);
