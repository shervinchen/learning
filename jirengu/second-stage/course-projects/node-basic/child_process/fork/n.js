const child_process = require('child_process');

var n = child_process.fork('./child.js');
n.on('message', function (message) {
  console.log(`PARENT got message: ${message}`);
});
n.send({ hello: 'world' });
