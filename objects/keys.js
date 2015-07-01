var obj = {
  'one': 'one',
  'two': 'two'
};

Object.prototype._keys = function() {
  var enumProperties = [];
  for (var i in this) {
    if (this.propertyIsEnumerable(i)) {
      enumProperties.push(i);
    }
  }
return enumProperties;
};

obj._keys();
// 2
