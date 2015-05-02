(function(root, arrayCopyWithin) {

  if (typeof exports !== 'undefined') {

    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = arrayCopyWithin;
    }

    exports.arrayCopyWithin = arrayCopyWithin;

  } else if (typeof define === 'function' && define.amd) {

    define([], function() {
      return arrayCopyWithin;
    });

  }

  if (!Array.prototype.copyWithin) {
    Array.prototype.copyWithin = function(target, start, end) {
      return arrayCopyWithin(this, target, start, end);
    };
  }

})(this, function (array, target, start, end) {

  if (array == null) {
    throw new TypeError('this is null or undefined');
  }

  var object = Object(array);
  // element (Array or Object) length
  var length = parseInt(object.length, 10);
  // start position to copy
  var target = parseInt(target, 10);

  if (start === undefined) {
    throw new TypeError('start is undefined');
  }

  if (end === null || end === undefined) {
    end = length;
  }

  if (start < 0) {
    start = length + start;
  }

  if (end < 0) {
    end = length + end;
  }

  var reverse = start > end;
  var count = (reverse ? start - end : end - start);

  while (count > 0) {

    count--;
    var from = !reverse ? start + count : end - count;
    var to = !reverse ? target + count : target - count;

    if (from in object) {
      object[to] = object[from];
    } else {
      delete[to];
    }
  }

  return object;
});