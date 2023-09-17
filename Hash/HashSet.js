export default class HashSet {
  constructor() {
    this.hashSet = {};
  }

  add(key) {
    this.hashSet[key] = true;
  }

  remove(key) {
    delete this.hashSet[key];
  }

  contains(key) {
    return this.hashSet.hasOwnProperty(key);
  }
}
