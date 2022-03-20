const child_process = require('child_process');
const { execFile } = child_process;

// const userInput = '. && pwd';
const userInput = '.';

execFile(
  'ls',
  ['-la', userInput],
  {
    cwd: 'C:\\',
    env: {
      NODE_ENV: 'development',
    },
    shell: 'bash',
    maxBuffer: 1024 * 1024,
  },
  (error, stdout, stderr) => {
    console.log(error, stdout, stderr);
  }
);

// const streams = execFile('ls', ['-la', userInput]);

// streams.stdout.on('data', (chunk) => {
//   console.log(chunk);
// });
