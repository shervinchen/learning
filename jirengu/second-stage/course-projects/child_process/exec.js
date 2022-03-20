const util = require('util');
const child_process = require('child_process');
const { exec } = child_process;

const promisifyExec = util.promisify(exec);

exec('ls -l ../', (error, stdout, stderr) => {
  console.log(error, stdout, stderr);
});

// const streams = exec('ls -l ../');

// streams.stdout.on('data', (chunk) => {
//   console.log(chunk);
// });

// streams.stderr.on('data', (chunk) => {
//   console.log(chunk);
// });

// streams.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// promisifyExec('ls -l ../').then((result) => {
//   console.log(result.stdout);
// });

const userInput = '. && rm -rf /';

promisifyExec(`ls ${userInput}`).then((result) => {
  console.log(result.stdout);
});
