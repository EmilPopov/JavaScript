(function() {
  'use strict';
  var oldObj = {
      fName: 'Ivan',
      lName: 'Ivanov',
      f: function() {
        return this.fName + ' ' + this.lName;
      }
    },
    copy;

  function deepCopy(obj) {
    if (typeof obj !== 'object')
      return obj;
    var result = {},
      prop;
    for (prop in oldObj)
      result[prop] = deepCopy(oldObj[prop]);
    return result;
  }

  copy = deepCopy(oldObj);
  copy.lName = 'Gogo';
  copy.fName = 'Stoqnov';
  console.log(oldObj.f());
  console.log(copy.f());
}())