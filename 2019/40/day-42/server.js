// server.js
// Prerequisites
// NodeJS - https://nodejs.org/en/
//
// cd 2019/40/day-42/ && node server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = http.createServer((request, response) => {
  let filePath = `.${request.url}`;

  console.log(request.url);

  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code == 'ENOENT') {
        fs.readFile('./404.html', (error, content) => {
          response.writeHead(404, { 'Content-Type': 'text/html' });
          response.end(content, 'utf-8');
        });
      }
      else {
        response.writeHead(500);
        response.end('Error: '+error.code+' ..\n');
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
});

app.listen(3000, 'localhost');
console.log('http://localhost:3000/');
