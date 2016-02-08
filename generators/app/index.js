"use strict";

const Base = require('yeoman-generator').Base;
const path = require('path');
const yosay = require('yosay');

const QUESTIONS = [{
  type: 'input',
  name: 'module:name',
  message: 'Module name'
}, {
  type: 'input',
  name: 'module:description',
  message: 'Module description'
}, {
  type: 'input',
  name: 'module:author:nickname',
  message: 'Your GitHub username'
}, {
  type: 'input',
  name: 'module:author:fullName',
  message: 'Your full name'
}, {
  type: 'list',
  name: 'module:license',
  message: 'Choose a license',
  default: 'MIT',
  choices: [
    'Apache-2.0',
    'Artistic-2.0',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'EPL-1.0',
    'GPL-2.0',
    'GPL-3.0',
    'ISC',
    'LGPL-2.1',
    'LGPL-3.0',
    'MIT',
    'MPL-2.0',
    'Unlicense'
  ]
}];

/**
 * Fetch license text from choosealicense.com
 * @param {String} license License ID
 * @param {Function} cb Callback function with license content as argument
 */
function fetchLicense(license, cb) {
  const username = 'github';
  const repository = 'choosealicense.com';
  const branch = 'gh-pages';
  const cacheRoot = this.cacheRoot();
  const sourceRoot = this.sourceRoot();

  this.remote(username, repository, branch, (error, remote) => {
    this.sourceRoot(path.join(cacheRoot, username, repository, branch));

    const content = this
      .read(['_licenses/', license.toLowerCase(), '.html'].join(''))
      .replace(/-+[\d\D]*?-+\n\n/, '')
      .replace(/\[year\]/g, new Date().getFullYear())
      .replace(/\[fullname\]/g, this.answers['module:author:fullName']);

    this.sourceRoot(sourceRoot);

    cb(content);
  });
}

module.exports = class AppGenerator extends Base {
  prompting() {
    const done = this.async();

    this.log(yosay('Welcome to the extraordinary ES6 npm module generator!'));
    this.prompt(QUESTIONS, answers => {
      this.answers = answers;

      fetchLicense.call(this, this.answers['module:license'], content => {
        this.write('LICENSE', content);
        done();
      });
    });
  }

  writing() {
    this.directory('src', 'src');
    this.directory('test', 'test');
    this.copy('babelrc', '.babelrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('npmignore', '.npmignore');
    this.copy('package.json', 'package.json');
    this.copy('README.md', 'README.md');
    this.copy('travis.yml', '.travis.yml');
  }

  install() {
    this.npmInstall();
  }
};
