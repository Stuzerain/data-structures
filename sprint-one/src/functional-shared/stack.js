var Stack = function () {
  var obj = {};
  obj.storage = {};
  obj.counter = 0;

  return _.extend(obj, stackMethods);
};

var stackMethods = {
  push: function (value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function () {
    if (this.counter > 0) {
      this.counter--;
    }
    return this.storage[this.counter];
  },

  size: function () {
    return this.counter;
  }
};

