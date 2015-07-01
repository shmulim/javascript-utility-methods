// Returns true if object is a Number (including NaN).

var num = 42;

Object.prototype._isNumber = function() {
  if (this.constructor === Number || NaN){
    return true;
  } else {
    return false;
  }
};

num._isNumber();
// true
