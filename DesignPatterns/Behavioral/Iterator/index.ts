/* 
The Iterator design pattern is a behavioral design pattern that allows sequential access to elements of a collection 
without exposing the underlying representation. 

This pattern is particularly useful for traversing collections like arrays, lists, or other aggregate objects. 
The key idea is to provide a standard way to iterate over a collection of objects, 
regardless of the specific implementation of the collection.
*/

function range(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { done: false, value: start };
      }
      return { done: true, value: end };
    },
  };
}

for (const n of range(0, 100, 5)) {
  console.log(n);
}
