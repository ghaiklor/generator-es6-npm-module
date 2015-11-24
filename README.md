# generator-es6-npm-module

![Build Status](https://img.shields.io/travis/ghaiklor/generator-es6-npm-module.svg)
![Coverage](https://img.shields.io/coveralls/ghaiklor/generator-es6-npm-module.svg)

![Downloads](https://img.shields.io/npm/dm/generator-es6-npm-module.svg)
![Downloads](https://img.shields.io/npm/dt/generator-es6-npm-module.svg)
![npm version](https://img.shields.io/npm/v/generator-es6-npm-module.svg)
![License](https://img.shields.io/npm/l/generator-es6-npm-module.svg)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![dependencies](https://img.shields.io/david/ghaiklor/generator-es6-npm-module.svg)
![dev dependencies](https://img.shields.io/david/dev/ghaiklor/generator-es6-npm-module.svg)

This generator creates empty npm module with ES6 support and integrated Travis and Coveralls services.

## Getting Started

```bash
npm install -g yo generator-es6-npm-module
mkdir my-project && cd my-project
yo es6-npm-module
```

Or you can create folder with your project and just copy\paste this code to terminal (you should be located under your project folder)

```bash
npm install -g yo generator-es6-npm-module && yo es6-npm-module
```

## Project structure

When project is generated you will get project with that structure:

```
|-- my-project
  |-- src
  |  |-- index.js
  |-- test
  |  |-- unit
  |  |  |-- index.test.js
  |  |-- mocha.opts
  |-- .babelrc
  |-- .editorconfig
  |-- .gitignore
  |-- .npmignore
  |-- .travis.yml
  |-- package.json
  |-- LICENSE
  |-- README.md
```

## License

The MIT License (MIT)

Copyright © 2015 Eugene Obrezkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
