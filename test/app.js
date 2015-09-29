var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('app', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../src/app'))
      .withOptions({skipInstall: true})
      .withPrompts({'module:license': 'MIT'})
      .on('end', done);
  });

  it('Should create files', function () {
    assert.file([
      'src/index.es6',
      'test/unit/index.test.es6',
      'test/bootstrap.test.es6',
      'test/mocha.opts',
      'babelhook.js',
      '.babelrc',
      'CHANGELOG.md',
      '.editorconfig',
      '.gitignore',
      'index.js',
      '.npmignore',
      'package.json',
      'README.md',
      '.travis.yml',
      'LICENSE'
    ]);
  });
});
