var copyWithin = require('../');
var test = require('tape');

test('return [4, 5, 3, 4, 5]', function (t) {

  t.plan(2);

  t.deepEqual(
    copyWithin([1, 2, 3, 4, 5], 0, 3),
    [4, 5, 3, 4, 5]
  );

  t.deepEqual(
    [1, 2, 3, 4, 5].copyWithin(0, 3),
    [4, 5, 3, 4, 5]
  );
});

test('return [4, 2, 3, 4, 5]', function (t) {

  t.plan(2);

  t.deepEqual(
    copyWithin([1, 2, 3, 4, 5], 0, 3, 4),
    [4, 2, 3, 4, 5]
  );

  t.deepEqual(
    [1, 2, 3, 4, 5].copyWithin(0, 3, 4),
    [4, 2, 3, 4, 5]
  );
});

test('return [4, 2, 3, 4, 5]', function (t) {

  t.plan(2);

  t.deepEqual(
    copyWithin([1, 2, 3, 4, 5], 0, -2, -1),
    [4, 2, 3, 4, 5]
  );

  t.deepEqual(
    [1, 2, 3, 4, 5].copyWithin(0, -2, -1),
    [4, 2, 3, 4, 5]
  );
});

test('return [5, 4, 3, 4, 5]', function (t) {

  t.plan(2);

  t.deepEqual(
    copyWithin([1, 2, 3, 4, 5], 0, 4, 3),
    [4, 2, 3, 4, 5]
  );

  t.deepEqual(
    [1, 2, 3, 4, 5].copyWithin(0, 4, 3),
    [4, 2, 3, 4, 5]
  );
});

test('return {0: 1, 3: 1, length: 5}', function (t) {

  t.plan(2);

  t.deepEqual(
    copyWithin({length: 5, 3: 1}, 0, 3),
    {0: 1, 3: 1, length: 5}
  );

  t.deepEqual(
    [].copyWithin.call({length: 5, 3: 1}, 0, 3),
    {0: 1, 3: 1, length: 5}
  );
});
