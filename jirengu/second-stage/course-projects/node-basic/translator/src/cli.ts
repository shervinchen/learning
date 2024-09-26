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

// tsx src/cli.ts -h
// tsx src/cli.ts -V
// pnpm start
// pnpm build

// tsx src/cli.ts xxx

// npm publish
// fy xxx

// yarn global add fanyi

// 在本地运行
// vi ~/.bashrc
// alias f="tsx /mnt/d/Projects/learning/jirengu/second-stage/course-projects/translator/src/cli.ts"
// source ~/.bashrc
