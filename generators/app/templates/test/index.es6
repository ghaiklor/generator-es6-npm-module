let assert = require('chai').assert;
let module = require('../lib/');

describe('Entry Point', () => {
  it('Should properly export', () => {
    assert.isObject(module);
  });
});
