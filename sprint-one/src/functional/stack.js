var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.counter = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    someInstance.storage[someInstance.counter] = value;
    someInstance.counter++;
  };

  someInstance.pop = function () {
    if (someInstance.counter > 0) {
      someInstance.counter--;
    }
    return someInstance.storage[someInstance.counter]; // confusion about why counter is previous number AFTER decrementing
  };

  someInstance.size = function () {
    return someInstance.counter;
  };

  return someInstance;
};
