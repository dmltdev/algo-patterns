export class Node {
  public key: number;
  public val: number;
  public next: Node | null;
  public prev: Node | null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
    this.next = this.prev = null;
  }
}

class LRUCache {
  public cap: number;
  public cache: Map<number, number>;
  public left: Node;
  public right: Node;

  constructor(capacity: number) {
    this.cap = capacity;
    this.cache = new Map();

    // Left = LRU, right = MRU
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right; // Link left with right
    this.right.prev = this.left; // Link right with left
  }

  //* Helper Function | Removes LRU Node
  remove(node: Node): void {
    // [prev]⇿[node]⇿[nxt] => [prev]⇿[nxt]
    const prev = node.prev;
    const next = node.next;
    prev!.next = next;
    next!.prev = prev;
  }

  //* Helper Function | Inserts MRU node
  insert(node: Node): void {
    // [LRU]⇿[...]⇿[prev MRU]⇿[MRU] => [LRU]⇿[...]⇿[prev MRU]⇿[node (new MRU)]⇿[MRU]
    const prev = this.right.prev;
    const next = this.right;
    prev!.next = next!.prev = node;
    node.next = next;
    node.prev = prev;
  }

  // Returns the value of the key from the cache (hash map).
  get(key: number): number {
    if (key in this.cache) {
      this.remove(this.cache[key]);
      this.insert(this.cache[key]);
      return this.cache[key].val;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (key in this.cache) {
      this.remove(this.cache[key]);
    }
    this.cache[key] = new Node(key, value);
    this.insert(this.cache[key]);

    if (this.cache.size > this.cap && this.left.next) {
      const lru = this.left.next;
      this.remove(lru);
      delete this.cache[lru!.key];
    }
  }
}
