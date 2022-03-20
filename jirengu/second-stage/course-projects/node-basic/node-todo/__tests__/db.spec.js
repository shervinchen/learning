const fs = require('fs');
const db = require('../db.js');

jest.mock('fs');

describe('db', () => {
  afterEach(() => {
    fs.clearMocks();
  });
  it('can read', async () => {
    const data = [{ name: 'hi', done: true }];
    fs.setReadFileMock('/xxx', null, JSON.stringify(data));
    const list = await db.read('/xxx');
    expect(list).toStrictEqual(data);
  });
  it('can write', async () => {
    let fakeFile;
    fs.setWriteFileMock('/yyy', (path, data, callback) => {
      fakeFile = data;
      callback(null);
    });
    const list = [
      { name: 'hi', done: true },
      { name: 'hello', done: false },
    ];
    await db.write(list, '/yyy');
    expect(fakeFile).toBe(JSON.stringify(list));
  });
});
