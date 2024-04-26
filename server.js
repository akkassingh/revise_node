const { createServer } = require("http");
const { createReadStream } = require("fs");
const { type } = require("os");
const { send } = require("process");

const sendFile = (res, staus, type, file) => {
  res.writeHead(200, { "Content-Type": type });
  createReadStream(file).pipe(res);
};

createServer((req, res) => {
  switch (req.url) {
    case "/":
      return sendFile(res, 200, "text/html", "./homepage.html");
    case "/assets/sample.jpeg":
      return sendFile(res, 200, "img/jpeg", "./assets/sample.jpeg");
    case "/styles.css":
      return sendFile(res, 200, "img/css", "./assets/styles.css");
    default:
      return sendFile(res, 404, "text/html", "./404.html");
  }
}).listen(3000);

console.log("Web server listening on port 3000");
