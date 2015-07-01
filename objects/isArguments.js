Object.prototype._isArguments = function() {
  if (Object.prototype.toString.call(arguments) === '[object Arguments]') {
    return true;
  } else {
    return false;
  }
};

function isArg(){
  console.log(arguments._isArguments()); // true
}
