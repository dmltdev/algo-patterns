// The Proxy design pattern is a structural design pattern that allows you to provide a surrogate or placeholder object,
// which controls access to another object.
// Proxies are often used to perform additional actions when accessing or modifying an object,
// such as logging, validation, or lazy initialization.
// The Proxy pattern can help manage complexity by separating these concerns from the core logic of the object being accessed.

const original = { name: "jeff" };

// Proxies act as a wrapper around the target object and intercept operations performed on the target object with "traps" - methods that intercept operations on the target object.
const reactive = new Proxy(original, {
  get(target, key) {
    console.log("Tracking: ", key);
    return target[key];
  },
  set(target, key, value) {
    console.log("Updating UI...");
    return Reflect.set(target, key, value);
  },
});

console.log(original);
reactive.name;

reactive.name = "bob";
console.log(original);
