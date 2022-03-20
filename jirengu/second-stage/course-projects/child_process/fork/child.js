process.on('message', function (message) {
  console.log('CHILD got message: ');
  console.log(message);
});

setTimeout(() => {
  process.send({ foo: 'bar' });
}, 2000);
