const fs = require('fs');

function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 1000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
        if (!ok) {
          console.log('can not write');
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', () => {
        console.log('drain');
        write();
      });
    }
  }
}

const writer = fs.createWriteStream('./big_file.txt');

writeOneMillionTimes(writer, 'hello word', 'utf8', () => {});
