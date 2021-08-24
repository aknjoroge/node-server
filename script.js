let http = require("http");
let fs = require("fs");

let server = http.createServer(function (request, responce) {
  if (request.url === "/") {
    let data = fs.readFileSync(`${__dirname}/static/root.html`, "utf-8");
  fs.readFile(`${__dirname}/static/root.html`, "utf-8", function(error,data){ /* data erroor */})
    responce.end(data);
  } else if (request.url === "/home") {
    let data = fs.readFileSync(`${__dirname}/static/home.html`, "utf-8");
    responce.end(data);
  } else {
    let data = fs.readFileSync(`${__dirname}/static/error.html`, "utf-8");
    responce.end(data);
  }
});

server.listen(2000, "127.0.0.1", function () {   console.log("server started"); });
