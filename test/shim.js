require('../shim');
var test = require('tape');
var Sym = typeof Symbol === 'undefined' ? {} : Symbol;
var isSymbol = function (sym) {
  return typeof Sym === 'function' && typeof sym === 'symbol';
};
var functionsHaveNames = (function foo() {}).name === 'foo';
var ifFunctionsHaveNamesTest = functionsHaveNames ? test : test.skip;
var ifSymbolUnscopablesTest = isSymbol(Sym.unscopables) ? test : test.skip;

if (!Object.prototype.hasOwnProperty.call(Array.prototype, 'copyWithin')) {
  return test('exists', function (t) {
    t.same(!!Array.prototype.copyWithin, true);
  });
}

ifFunctionsHaveNamesTest('has the correct name', function (t) {
  t.plan(1);

  t.same(Array.prototype.copyWithin.name, 'copyWithin');
});

test('has the right arity', function (t) {
  t.plan(1);

  t.same(Array.prototype.copyWithin.length, 2);
});

test('is not enumerable', function (t) {
  t.plan(1);

  var descriptor = Object.getOwnPropertyDescriptor(Array.prototype, 'copyWithin');

  t.same(descriptor.enumerable, false);
});

ifSymbolUnscopablesTest('should be unscopable if Symbols exist', function (t) {
  t.plan(2);

  var unscopables = Array.prototype[Sym.unscopables];

  t.same(!!unscopables, true);
  t.same(unscopables.copyWithin, true);
});

test('modifies the object in-place', function (t) {
  t.plan(2);

  var arr = [1, 2, 3, 4, 5];

  t.same(arr.copyWithin(0, 3), [4, 5, 3, 4, 5]);
  t.same(arr, [4, 5, 3, 4, 5]);
});
