var arrayCopyWithin = require('./');

if (!Array.prototype.copyWithin) {
  Object.defineProperty(Array.prototype, 'copyWithin', {
    enumerable: false,
    value: function copyWithin(value, start) {
      var end = arguments.length > 2 ? arguments[2] : undefined;

      return arrayCopyWithin(this, value, start, end);
    }
  });
}
