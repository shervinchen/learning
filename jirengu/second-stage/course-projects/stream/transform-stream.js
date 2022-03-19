const { Transform } = require('stream');

const upperCaseTransformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

process.stdin.pipe(upperCaseTransformStream).pipe(process.stdout);
