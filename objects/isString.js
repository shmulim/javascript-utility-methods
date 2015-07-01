var str = 'string';

Object.prototype._isString = function() {
  if (this.constructor === String){
    return true;
  } else {
    return false;
  }
};

str._isString();
// true
