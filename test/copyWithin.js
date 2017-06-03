var copyWithin = require('../');
var test = require('tape');

test('works with 2 args', function (t) {
  t.plan(4);

  t.same(copyWithin([1, 2, 3, 4, 5], 0, 3), [4, 5, 3, 4, 5]);
  t.same(copyWithin([1, 2, 3, 4, 5], 1, 3), [1, 4, 5, 4, 5]);
  t.same(copyWithin([1, 2, 3, 4, 5], 1, 2), [1, 3, 4, 5, 5]);
  t.same(copyWithin([1, 2, 3, 4, 5], 2, 2), [1, 2, 3, 4, 5]);
});

test('works with 3 args', function (t) {
  t.plan(3);

  t.same(copyWithin([1, 2, 3, 4, 5], 0, 3, 4), [4, 2, 3, 4, 5]);
  t.same(copyWithin([1, 2, 3, 4, 5], 1, 3, 4), [1, 4, 3, 4, 5]);
  t.same(copyWithin([1, 2, 3, 4, 5], 1, 2, 4), [1, 3, 4, 4, 5]);
});

test('works with negative args', function (t) {
  t.plan(5);

  t.same(copyWithin([1, 2, 3, 4, 5], 0, -2), [4, 5, 3, 4, 5]);
  t.same(copyWithin([1, 2, 3, 4, 5], 0, -2, -1), [4, 2, 3, 4, 5]);
  t.same(copyWithin([1, 2, 3, 4, 5], -4, -3, -2), [1, 3, 3, 4, 5]);
  t.same(copyWithin([1, 2, 3, 4, 5], -4, -3, -1), [1, 3, 4, 4, 5]);
  t.same(copyWithin([1, 2, 3, 4, 5], -4, -3), [1, 3, 4, 5, 5]);
});

test('works with arraylike objects', function (t) {
  t.plan(4);

  var args = (function () { return arguments; }(1, 2, 3));
  t.same(Array.isArray(args), false);
  var argsClass = Object.prototype.toString.call(args);
  t.same(Array.prototype.slice.call(args), [1, 2, 3]);
  Array.prototype.copyWithin.call(args, -2, 0);
  t.same(Array.prototype.slice.call(args), [1, 1, 2]);
  t.same(Object.prototype.toString.call(args), argsClass);
});

test('should delete the target key if the source key is not present', function (t) {
  t.plan(1);

  t.same(copyWithin([undefined, 1, 2], 1, 0), [undefined, undefined, 1]);
});

test('should check inherited properties as well', function (t) {
  t.plan(4);

  var Parent = function Parent() {};
  Parent.prototype[0] = 'foo';
  var sparse = new Parent();
  sparse[1] = 1;
  sparse[2] = 2;
  sparse.length = 3;
  var result = copyWithin(sparse, 1, 0);

  t.not(result['0'], undefined);
  t.false(Object.prototype.hasOwnProperty.call(result, 0));
  t.true(Object.prototype.hasOwnProperty.call(result, 1));
  t.same(result, { 1: 'foo', 2: 1, length: 3 });
});
