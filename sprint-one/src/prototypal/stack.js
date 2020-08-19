var Stack = function () {
  var obj = Object.create(stackMethods);
  obj.counter = 0;
  obj.storage = {};

  return obj;
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


