import path from 'path';
import { assert, test } from 'yeoman-generator';

describe('app', () => {
  before(done => {
    test
      .run(path.join(__dirname, '../../src/app'))
      .withOptions({skipInstall: true})
      .withPrompts({'module:license': 'MIT'})
      .on('end', done);
  });

  it('Should create files', () => {
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
      '.npmignore',
      'package.json',
      'README.md',
      '.travis.yml',
      'LICENSE'
    ]);
  });
});
