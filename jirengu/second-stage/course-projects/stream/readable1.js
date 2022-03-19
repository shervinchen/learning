const { Readable } = require('stream');

const inStream = new Readable();

inStream.push('ABCDEFGHIJKLM');
inStream.push('NOPQRSTUVWXYZ');

inStream.push(null);

// inStream.pipe(process.stdout);

inStream.on('data', (chunk) => {
  process.stdout.write(chunk);
  console.log('write data');
});
