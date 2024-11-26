const http = require("http");
/**
 * Create a small HTTP server using Node's HTTP module
 */

const app = http.createServer((_, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Holberton School!");
});
app.listen(1245);

module.exports = app;
