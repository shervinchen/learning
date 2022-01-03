const fs = require('fs');
const path = require('path');

const homedir = require('os').homedir();
const home = process.env.HOME || homedir;
const TODO_DATABASE_PATH = path.join(home, '.todo');

const getList = (data) => {
  let list;
  try {
    list = JSON.parse(data.toString());
  } catch (error) {
    list = [];
  }
  return list;
};

const db = {
  read(path = TODO_DATABASE_PATH) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, { flag: 'a+' }, (error, data) => {
        if (error) {
          return reject(error);
        }
        resolve(getList(data));
      });
    });
  },
  write(list, path = TODO_DATABASE_PATH) {
    return new Promise((resolve, reject) => {
      const listStr = JSON.stringify(list);
      fs.writeFile(path, listStr, (error) => {
        if (error) {
          return reject(error);
        }
        resolve();
      });
    });
  },
};

module.exports = db;
