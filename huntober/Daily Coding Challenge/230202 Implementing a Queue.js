var Queue = function() {
  // implement your Queue constructor here
  this.queue = []
};

Queue.prototype.enqueue = function(item) {
  // add item to the queue
  return this.queue.unshift(item)
};

Queue.prototype.dequeue = function() {
  // remove item from the front of the queue and return its value
  return this.queue.pop()
};

Queue.prototype.size = function() {
  // return number of items in queue so far
  return this.queue.length
};