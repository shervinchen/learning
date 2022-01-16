const db = require('./db.js');
const inquirer = require('inquirer');

module.exports.add = async (name) => {
  const list = await db.read();
  list.push({
    name,
    done: false,
  });
  await db.write(list);
};

module.exports.clear = async () => {
  await db.write([]);
};

function doneTask(list, index) {
  list[index].done = true;
  db.write(list);
}

function undoneTask(list, index) {
  list[index].done = false;
  db.write(list);
}

function deleteTask(list, index) {
  list.splice(index, 1);
  db.write(list);
}

function updateTaskName(list, index) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a new task name',
        default: list[index].name,
      },
    ])
    .then((answers3) => {
      list[index].name = answers3.name;
      db.write(list);
    });
}

function performTaskAction(action, list, index) {
  const actions = {
    doneTask,
    undoneTask,
    updateTaskName,
    deleteTask,
  };
  const targetAction = actions[action];
  targetAction && targetAction(list, index);
}

function selectTaskAction(list, index) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Please select your task action',
        choices: [
          {
            name: 'Exit',
            value: 'quit',
          },
          {
            name: 'Done task',
            value: 'doneTask',
          },
          {
            name: 'Undone task',
            value: 'undoneTask',
          },
          {
            name: 'Modify task name',
            value: 'updateTaskName',
          },
          {
            name: 'Delete task',
            value: 'deleteTask',
          },
        ],
      },
    ])
    .then((answer) => {
      performTaskAction(answer.action, list, index);
    });
}

function addTask(list) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a task name',
      },
    ])
    .then((answer) => {
      list.push({
        name: answer.name,
        done: false,
      });
      db.write(list);
    });
}

function printAllChoices(list) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'index',
        message: 'Please select the task you want to operate',
        choices: [
          {
            name: 'Exit',
            value: '-1',
          },
          ...list.map((task, index) => ({
            name: `${task.done ? '[x]' : '[_]'} ${index + 1} - ${task.name}`,
            value: index.toString(),
          })),
          {
            name: 'Add task',
            value: '-2',
          },
        ],
      },
    ])
    .then((answers) => {
      const index = parseInt(answers.index);
      if (index >= 0) {
        selectTaskAction(list, index);
      } else if (index === -2) {
        addTask(list);
      }
    });
}

module.exports.showAll = async () => {
  const list = await db.read();
  printAllChoices(list);
};
