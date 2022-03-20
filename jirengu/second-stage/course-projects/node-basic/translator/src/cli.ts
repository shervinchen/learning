#!/usr/bin/env node

import * as commander from 'commander';
import { translate } from './main';

const program = new commander.Command();

program
  .version('0.0.1')
  .name('fy')
  .usage('<English>')
  .arguments('<English>')
  .action(function (english) {
    translate(english);
  });

program.parse(process.argv);

// ts-node-dev src/cli.ts -h
// ts-node-dev src/cli.ts -V
// yarn start

// ts-node-dev src/cli.ts xxx
// tsc

// npm publish
// fy xxx

// yarn global add fanyi

// 在本地运行
// vi ~/.bashrc
// alias f="ts-node-dev /mnt/d/Projects/learning/jirengu/second-stage/course-projects/translator/src/cli.ts"
// source ~/.bashrc
