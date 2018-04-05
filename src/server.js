let http = require('http');
var handler = require('./handler');
let server = http.createServer(handler);
const port = 3000;

server.listen(port, () => {
  console.log(`this server listens on port: ${port}`);
});
