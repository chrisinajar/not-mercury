# Not Mercury [![Build Status](https://travis-ci.org/chrisinajar/not-mercurial.svg?branch=master)](https://travis-ci.org/chrisinajar/not-mercurial)
#### All of the infinite brilliance of Raynos' Mercury framework, without "mercury".

`nhg` is basically just [mercury](https://www.npmjs.com/package/mercury) but without mercury. If you've ever read the source code for mercury (which you should, it's very short) you can see that it is basically a collection of independant modules and some glue code.

This repository breaks out those modules into their own files for `browserify` efficiency and uses the modularized versions of the glue code (largely thanks to [Ben Drucker](https://www.npmjs.com/~bendrucker)). *This repository contains no actual code, this is just for npm convenience*.

## Installation

`npm install nhg`

## Usage

```js
'use strict';
 
var document = require('nhg/document');
var h = require('nhg/h');
var State = require('nhg/state');
var Value = require('nhg/value');
var Send = require('nhg/send');
 
function App() {
    return State({
        value: Value(0),
        channels: {
            clicks: incrementCounter
        }
    });
}
 
function incrementCounter(state) {
    state.value.set(state.value() + 1);
}
 
App.render = function render(state) {
    return h('div.counter', [
        'The state ', h('code', 'clickCount'),
        ' has value: ' + state.value + '.', h('input.button', {
            type: 'button',
            value: 'Click me!',
            'ev-click': Send(state.channels.clicks)
        })
    ]);
};
```

## Contributing
Do not contribute code to this repository, create or update modules it depends on and make PR's to update the dependency.

`npm run test`

# License
MIT
