var array = [0, 1, false, 2, '', 3, null, undefined, NaN];

Array.prototype.compact = function(){
  return this.filter(function(i){
    return i;
  });
};

array.compact();
// [1, 2, 3]
