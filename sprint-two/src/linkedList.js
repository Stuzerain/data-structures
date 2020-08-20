var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var currentNode = new Node(value);
    if (list.head === null) {
      list.head = currentNode;
      list.tail = currentNode;
    } else {
      list.tail.next = currentNode;
    }
    list.tail = currentNode;
  };

  list.removeHead = function () {
    var removed = list.head.value;
    var newHead = list.head.next;
    list.head = list.head.next;
    // delete list.head;

    return removed;
  };


  // I: node
  // O: boolean
  list.contains = function (target) {
    // check value of value property of each object
    // recurse on next property

    var checkForVal = function (node) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      return checkForVal(node.next);
    };
    return checkForVal(list.head);
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// What is the time complexity of the above functions?
//   LinkedList: should be constant
//   addToTail: should be constant
//   removeFromHead: should be constant
//   contains: should be linear
//   Node: should be constant

/*

{value: 5, next: {...}}

  {a: {b: {c: {d: }}}}

  removed = a: asdf   line 18
  newHead = {b: {c: {d: }}}   line 19
  head = newHead   line 20

  where does the original head ({a: ...}) go? We aren't explicitly deleting it, but we aren't referencing it, so what happens?

 */
