// Own way to traverse through a collection.

// This might be used if we are using a custom data structure
// such as a graph wanting DFS or BFS.

const items = [1, "josh", true, 1.24];

// Function class decorator.
function Iterator(items) {
  this.index = 0;
  this.items = items;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },

  next: function () {
    return this.items[this.index++];
  },
};

const iterator = new Iterator(items);
console.log(iterator);

// This is a simple forward iterator going from the start to the last.
// You can have your own rules such as skipping x elements, or starting from the end.
while (iterator.hasNext()) {
  console.log(iterator.next());
}
