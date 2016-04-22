# Not Mercury [![Build Status](https://travis-ci.org/chrisinajar/not-mercury.svg?branch=master)](https://travis-ci.org/chrisinajar/not-mercury) [![Dependency Status](https://david-dm.org/chrisinajar/not-mercury.svg)](https://david-dm.org/chrisinajar/not-mercury) [![devDependency Status](https://david-dm.org/chrisinajar/not-mercury/dev-status.svg)](https://david-dm.org/chrisinajar/not-mercury#info=devDependencies)
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
var RunApp = require('nhg/app');
 
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

RunApp(document.body, App(), App.render);
```

# Modules
#### `nhg/app`
Module: [main-loop-app](https://npmjs.com/package/main-loop-app)

#### `nhg/array`
Module: [observ-array](https://npmjs.com/package/observ-array)

#### `nhg/base-event`
Module: [value-event/base-event](https://npmjs.com/package/value-event)

#### `nhg/computed`
Module: [observ/computed](https://npmjs.com/package/observ/computed)

#### `nhg/create`
Module: [virtual-dom/create-element](https://npmjs.com/package/virtual-dom)

#### `nhg/delegator`
Module: [dom-delegator](https://npmjs.com/package/dom-delegator)

#### `nhg/diff`
Module: [virtual-dom/diff](https://npmjs.com/package/virtual-dom)

#### `nhg/document`
Module: [global/document](https://npmjs.com/package/global/document)

#### `nhg/event`
Module: [weakmap-event](https://npmjs.com/package/weakmap-event)

#### `nhg/h`
Module: [virtual-dom/h](https://npmjs.com/package/virtual-dom)

#### `nhg/main`
Module: [main-loop](https://npmjs.com/package/main-loop)

#### `nhg/partial`
Module: [vdom-thunk](https://npmjs.com/package/vdom-thunk)

#### `nhg/patch`
Module: [virtual-dom/patch](https://npmjs.com/package/virtual-dom)

#### `nhg/router`
Module: [sour](https://npmjs.com/package/sour)

#### `nhg/send-change`
Module: [value-event/change](https://npmjs.com/package/value-event)

#### `nhg/send-click`
Module: [value-event/click](https://npmjs.com/package/value-event)

#### `nhg/send-event`
Module: [value-event/value](https://npmjs.com/package/value-event)

#### `nhg/send-key`
Module: [value-event/key](https://npmjs.com/package/value-event)

#### `nhg/send-submit`
Module: [value-event/submit](https://npmjs.com/package/value-event)

#### `nhg/send`
Module: [value-event/event](https://npmjs.com/package/value-event)

#### `nhg/state`
Module: [dover](https://npmjs.com/package/dover)

#### `nhg/struct`
Module: [observ-struct](https://npmjs.com/package/observ-struct)

#### `nhg/svg`
Module: [virtual-dom/virtual-hyperscript/svg](https://npmjs.com/package/virtual-dom)

#### `nhg/value`
Module: [observ](https://npmjs.com/package/observ)

#### `nhg/varhash`
Module: [observ-varhash](https://npmjs.com/package/observ-varhash)

#### `nhg/watch`
Module: [observ/watch](https://npmjs.com/package/observ/watch)

#### `nhg/window`
Module: [global/window](https://npmjs.com/package/global/window)


## Contributing
Do not contribute code to this repository, create or update modules it depends on and make PR's to update the dependency.

`npm run test`

# License
MIT
