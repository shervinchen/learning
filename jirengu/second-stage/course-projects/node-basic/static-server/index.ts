import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const server = http.createServer();
const publicDir = path.resolve(__dirname, 'public');
let cacheAge = 3600;

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  // console.log(request.method);
  // console.log(request.url);
  // console.log(request.headers);
  // const array = [];
  // request.on('data', (chunk) => {
  //   array.push(chunk);
  // });
  // request.on('end', () => {
  //   const body = Buffer.concat(array).toString();
  //   console.log('body');
  //   console.log(body);

  //   response.statusCode = 404;
  //   response.setHeader('X-frank', `I'm Frank`);
  //   response.setHeader('Content-Type', 'image/png');

  //   response.write('1\n');
  //   response.end();
  // });

  const { method, url: _url, headers } = request;
  const { pathname, search } = url.parse(_url);

  if (method !== 'GET') {
    response.statusCode = 405;
    response.end();
    return;
  }

  let filename = pathname.substr(1);
  // response.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (filename === '') {
    filename = 'index.html';
  }
  fs.readFile(path.resolve(publicDir, filename), (error, data) => {
    if (error) {
      if (error.errno === -4058) {
        response.statusCode = 404;
        fs.readFile(path.resolve(publicDir, '404.html'), (error, data) => {
          response.end(data);
        });
        response.end('404 not found');
      } else if (error.errno === -4068) {
        response.statusCode = 403;
        response.end('no auth to visit directory content');
      } else {
        response.statusCode = 500;
        response.end('server busy');
      }
    } else {
      response.setHeader('Cache-Control', `public, max-age=${cacheAge}`);
      response.end(data);
    }
  });
});

server.listen(8888);

// ts-node-dev index.ts
// curl -v http://localhost:8888
// curl -v -d "name=csdoker" http://localhost:8888

// http-server node-static
