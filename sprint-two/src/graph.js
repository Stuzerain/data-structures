

// Instantiate a new graph
var Graph = function () {
  // this = object.create(Graph.prototype)   (implied)
  this.nodes = {};
  this.edges = {};
  // return this   (implied)
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.node = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {

};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 nodes
 {value: 1, edge: {value: 5,
                   value: 3}}
 {value: 2}
 {value: 3}
 {value: 4}
 {value: 5, edge: {value: 1}}


 if {value:5} == node.edge[0];
*/



