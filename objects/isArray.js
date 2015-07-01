// Returns true if object is an Array.

var arr = [];
var obj = {};

Object.prototype._isArray = function() {
  if (this.constructor === Array){
    return true;
  } else {
    return false;
  }
};

arr._isArray();
// true

obj._isArray();
// false

function argsFunc(){
  return arguments._isArray(); // false (Arguments)
}

window.onload = function(){
  var div = document.getElementsByTagName('div');
  console.log(div._isArray()); // false (HTMLCollection)
};
