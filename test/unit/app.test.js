"use strict";

const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');

describe('app', () => {
  before(done => {
    test
      .run(path.join(__dirname, '../../generators/app'))
      .withPrompts({'module:license': 'MIT'})
      .on('end', done);
  });

  it('Should create files', () => {
    assert.file([
      'src/index.js',
      'test/unit/index.test.js',
      'test/mocha.opts',
      '.babelrc',
      '.editorconfig',
      '.gitignore',
      '.npmignore',
      'package.json',
      'README.md',
      '.travis.yml',
      'LICENSE'
    ]);
  });
});
