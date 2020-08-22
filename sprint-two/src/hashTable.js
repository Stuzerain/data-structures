

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, v]);
};

//storage
//  [[k1, v1], [k2, v2]]


/*
limitedArray.set = function (index, value) {
    checkLimit(index);
    if (storage[index] !== undefined) {
      storage[index].push(value);
    } else {
      storage[index] = [value];
    }
    console.log(storage);
  };


storage = [
  [[val1, val1], [val2, val2]],
  [val4, val4]
]
*/

// callback(storage[i], i, storage);

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var pair = this._storage.get(index);
  if (pair.length === 1) {
    return pair[0][1];
  } else {
    return this._storage.each(findKey);
  }

  // helper function to find key in tuples
  var findKey = function (value, ind, storage) {
    // if current index is equal to given index in retrieve (line 38)
    if (ind === index) {
      // then iterate with .each to go over each key
    }
  };
};
/*
{
  [k1, v1],
  [k2, v2],
  [k3, v3]
  ],

  [
  [k4, v4]
  ],
}
*/

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var deleteKey = function (value, index, storage) {
    if (storage[index] === value) {
      delete storage[index];
    }
  };

  this._storage.each(deleteKey);
};

/*
[[1, 1]] => [[2, 2]]

this._storage.set(storage.concat([[2, 2]])) => [[1, 1], [2, 2]]

 var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */


// [                              ]   outer array
//  []  []  []   []   []   []   []     buckets
//  [[], []]                                   tuples
/*

HashTable = {
  _.limit: 8,
  _.storage: [[t[0][1], t, t, t], [t, t, t, t], [], [], [], [], [], []]
}
*/


/* attempt at insertion with original .set method
// if storage is already occupied, don't insert
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]])
  // check if the given k is present

  //} else if (this._storage.get(index)[0] === k && this._storage.get(index)[1] !== v) {
    // access the index
      // check each element in the index
        // if the current key matches the given k
          // overwrite the value with the current v

  //} else {
    //var bucket = this._storage.get(index);
    //console.log(bucket);
    //this._storage.set(index, bucket.concat([[k, v]]));
    //console.log(this._storage);
  }
  */

