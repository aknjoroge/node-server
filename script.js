let http = require("http");
let fs = require("fs");

let server = http.createServer(function (request, responce) {
  if (request.url === "/") {
  } else if (request.url === "home") {
  } else {
  }
});

server.listen(2000, "127.0.0.1", function () {
  console.log("server started");
});
