var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('app', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions({skipInstall: true})
      .withPrompts({license: 'MIT'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.editorconfig',
      '.jshintrc'
    ]);
  });
});
