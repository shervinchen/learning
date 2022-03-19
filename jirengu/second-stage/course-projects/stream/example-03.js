const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
  const stream = fs.createReadStream('./big_file.txt');
  stream.on('data', (chunk) => {
    console.log('read data');
    console.log(chunk); // Buffer 二进制内容
    console.log(chunk.toString()); // 文本内容
  });
  stream.on('end', () => {
    console.log('read end');
  });
  stream.pipe(res);
});

server.listen(8888);
