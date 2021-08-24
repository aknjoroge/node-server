### Project Title

## Node js startup Server

## Description

A simple start up server with routing and static html rendering.

## Getting Started

### Dependencies

- nodejs.

Run `node -v` to confirm node is installed

```
node -v
v14.16.0
```

### Installing

1.  `npm install`

### Executing program

The program can be executed through npm script

2.  `npm start`

### Flow

I use fs (file system) module to read the static html files from the static folder

```javascript
let fs = require("fs");
```

`fs` has both synchronous and Asynchronous file reading method, in this project i use the synchronous method

```javascript
let data = fs.readFileSync(`${__dirname}/static/root.html`, "utf-8");
```

For A **large** project its better to use the Asynchronous method of fs

```javascript
fs.readFile(`${__dirname}/static/root.html`, "utf-8", function (error, data) {
  /* data error */
});
```

The server runs on port `2000` using the http module, if another process is using the port change it to any another number

```javascript
server.listen(2000, "127.0.0.1", function () {
  console.log("server started");
});
```

The log message is displayed once the server has started

Routes are rendered using the request url

```javascript
if (request.url === "/") {
  /*Code */
}
```

## Etc

> If you have any advise or problems about the code feel free to fork it and contribute.

## Author

Alexander karanja
[@Twitter](https://twitter.com/aknjoroge)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License;
