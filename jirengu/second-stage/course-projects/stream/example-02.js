const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
  fs.readFile('./big_file.txt', (err, data) => {
    if (err) {
      res.end('404');
    } else {
      res.end(data);
      console.log('done');
    }
  });
});
server.listen(8888);
