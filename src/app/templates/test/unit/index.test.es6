import chai from 'chai';
import module from '../../';

const assert = chai.assert;

describe('Entry Point', () => {
  it('Should properly export', () => {
    assert.isObject(module);
  });
});
