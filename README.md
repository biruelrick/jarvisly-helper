# jarvisly-helper

[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/jarvisly-helper)
[![Github Releases](https://img.shields.io/github/downloads/atom/atom/latest/total.svg?style=flat-square)](https://github.com/biruelrick/jarvisly-helper/releases)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow&style=flat-square)](https://twitter.com/RicardoBiruel)

`jarvisly-helper` is a basic javascript library to help us with day-to-day development for do not waste time with small
tasks, do us wasting time researching books, google and filling our code with unnecessary lines. This is a new version
(2022) of my old library (`js-toolbelt`). I use this library massively in my NodeJS projects (backend and React
frontend).

## Installation

```bash
$ yarn install jarvisly-helper --save
```

or

```bash
$ npm install jarvisly-helper --save
```

## Usage

You can import all methods:

```bash
$ import jh from 'jarvisly-helper'
```

... or can import each method as like do you wish:

```bash
$ import { clone, returnOnlyNumbers } from 'jarvisly-helper'
```

## FUNCTIONS

### clone

`clone(Object)`

this function will brake all object's reference in all levels remember: the Object.assign and {...Object} will brake the
references only in first object level

```js
const contact = { country: 'Brazil' }
const obj = {
  name: 'Rick',
  age: '42',
  contact: contact
}
const newObject = jh.clone(obj);  // <- new object without referece to 'contact' object   
```

### returnOnlyNumbers

`returnOnlyNumbers(String)`

Returns only numbers from the string argument

```js
console.log(jh.returnOnlyNumbers('abc123/4-5')); //12345
console.log(jh.returnOnlyNumbers('02.934.311/0001-53'));  // '02934311000153'
```

## Author

- Rick Biruel
- Email: me@biruel.com
- Website: [www.biruel.com]
- Twitter: [@RicardoBiruel]
- Instagram: [@biruel]

## License

(The MIT License)

Copyright (c) 2017 Rick Biruel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the
'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[@RicardoBiruel]: <https://twitter.com/RicardoBiruel>

[@biruel]: <https://www.instagram.com/biruel/>

[www.biruel.com]: <https://www.biruel.com>
