# array-copyWithin [![Build Status](https://travis-ci.org/1000ch/array-copyWithin.svg?branch=master)](https://travis-ci.org/1000ch/array-copyWithin)

Polyfill for Array.prototype.copyWithin.

[![testling badge](https://ci.testling.com/1000ch/array-copyWithin.png)](https://ci.testling.com/1000ch/array-copyWithin)

## Usage

Functionally:

```javascript
var copyWithin = require('array-copyWithin');

var array = copyWithin([1, 2, 3, 4, 5], 0, 3);

console.log(array);
// => [4, 5, 3, 4, 5]
```

From Array object:

```javascript
require('array-copyWithin');

var array = [1, 2, 3, 4, 5].copyWithin(0, 3);

console.log(array);
// => [4, 5, 3, 4, 5]
```

## License

MIT: http://1000ch.mit-license.org