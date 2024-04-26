const { createServer } = require('http');

createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end(
        `
        <!DOCTYPE html>
        <html>
            <body>
            <h1>Hello World!<h1>
            <p>${req.method} request made for ${req.url}
        `
    );
}).listen(3000);

console.log("Web server listening on port 3000");