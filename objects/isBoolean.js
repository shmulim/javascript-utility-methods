// Returns true if object is either true or false.

var bool = true;
var str = 'true';

Object.prototype._isBoolean = function() {
  if (this.constructor === Boolean) {
    return true;
  } else {
    return false;
  }
};

bool._isBoolean();
// true

str._isBoolean();
// false
