const { createServer } = require("http");
const { createReadStream } = require("fs");
const data = require("./sample_data.json");


createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/json" });
    if(req.url.toLocaleLowerCase() === "/sample") {
        data.menu.id="samplefile";
    }
    res.end(JSON.stringify(data));
}).listen(3000);

console.log("Web server listening on port 3000");
