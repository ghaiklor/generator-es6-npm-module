let assert = require('chai').assert;
let module = require('../');

describe("Entry Point", () => {
  it("Should be properly export", () => {
    assert.isObject(module);
  });
});
