const fs = require('fs');

const stream = fs.createWriteStream('./big_file.txt');
for (let i = 0; i < 10000; i++) {
  stream.write(`This is ${i} row \n`);
}
stream.end();
console.log('done');

// stream 水流，默认没有水
// stream.write 可以让水流中有水（数据）
// chunk 块
// source 源头
// sink 水池
