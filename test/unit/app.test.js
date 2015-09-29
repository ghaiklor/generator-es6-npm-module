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
      'src/index.js',
      'test/unit/index.test.js',
      'test/bootstrap.test.js',
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
