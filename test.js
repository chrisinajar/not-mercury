var browserify = require('browserify');
var test = require('tape');
var length = require('length-stream');

test('not-mercury', function (t) {
  t.plan(2);

  t.ok(require('./'), 'could be mercury');

  var b = browserify();

  b.add('./index.js');
  var stream = length(checkLength);
  b.bundle().pipe(stream);

  function checkLength (l) {
    t.ok(l < 600, 'definitely not mercury');
  }
});
