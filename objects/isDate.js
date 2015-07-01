var date = new Date();

Object.prototype._isDate = function() {
  if (this.constructor === Date) {
    return true;
  } else {
    return false;
  }
};

date._isDate();
// true
