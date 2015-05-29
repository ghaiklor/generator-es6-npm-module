var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('app', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions({skipInstall: true})
      .withPrompts({'module:license': 'MIT'})
      .on('end', done);
  });

  it('Should create files', function () {
    assert.file([
      'src/index.es6',
      'test/index.es6.js',
      'babelhook.js',
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
