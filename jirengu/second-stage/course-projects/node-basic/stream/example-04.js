const fs = require('fs');
const stream = require('stream');
const events = require('events');

const fileStream = fs.createReadStream('./big_file.txt');

// console.log(fileStream);
// console.log(stream.Readable.prototype);
console.log(events.EventEmitter.prototype);

// node --inspect-brk index.js
