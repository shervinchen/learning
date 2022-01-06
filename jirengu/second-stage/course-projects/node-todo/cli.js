#!/usr/bin/env node
const program = require('commander');
const api = require('./index.js');
const pkg = require('./package.json');

program.version(pkg.version);

program
  .command('add')
  .description('add a task')
  .action((...args) => {
    const name = args.slice(0, -1).join(' ');
    api.add(name).then(
      () => {
        console.log('add success');
      },
      () => {
        console.log('add failed');
      }
    );
  });

program
  .command('clear')
  .description('clear all tasks')
  .action(() => {
    api.clear().then(
      () => {
        console.log('clear success');
      },
      () => {
        console.log('clear failed');
      }
    );
  });

program.parse(process.argv);

if (process.argv.length === 2) {
  api.showAll();
}

// cat ~/.todo
// rm ~/.todo
// node cli add task-name
// node cli clear
// node cli
// chmod +x cli.js

// yarn login
// yarn publish
// yarn global add node-todo

// task add myTask
// task --version

// yarn test
