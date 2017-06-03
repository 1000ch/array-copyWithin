module.exports = function (array, target, start, end) {
  if (array === null || array === undefined) {
    throw new TypeError('this is null or undefined');
  }

  var object = Object(array);
  var length = parseInt(object.length, 10);
  var target = parseInt(target, 10);

  if (start === undefined) {
    throw new TypeError('start is undefined');
  }

  if (end === null || end === undefined) {
    end = length;
  }

  var to = target < 0 ? Math.max(length + target, 0) : Math.min(target, length);
  var from = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  var last = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);
  var count = Math.min(last - from, length - to);
  var direction = 1;

  if (from < to && to < (from + count)) {
    direction = -1;
    from += count - 1;
    to += count - 1;
  }

  while (count > 0) {
    if (from in object) {
      object[to] = object[from];
    } else {
      delete object[to];
    }

    from += direction;
    to += direction;
    count--;
  }

  return object;
};
