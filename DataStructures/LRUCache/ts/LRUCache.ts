/* 
LRU cache uses a doubly linked list in combination with a hash map.
The hash map provides O(1) access to nodes, and the linked list maintains the order of nodes from least recently used (LRU) to most recently used (MRU).

!The linked list is initialized with sentinel nodes that are not stored in the hash map: they are fixed and only the next and prev pointers of these nodes and other nodes in the list are updated. 
!Sentinel nodes are dummy nodes that they simplify the code by eliminating the need for checking special cases (like inserting or removing at the beginning or end of the list), but they do not affect the inherent time complexity of these operations.

When a value is looked up, it becomes the most recently used (MRU), hence its position is changed to the right. 
The least recently used node (LRU) is located at the left. 
When we put a new node to the cache, exceeding its capacity, the LRU node is evicted.
*/

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

export default class LRUCache {
  public cap: number;
  private cache: Map<number, number>;
  private left: Node;
  private right: Node;

  constructor(capacity: number) {
    this.cap = capacity;
    this.cache = new Map();

    // Left = LRU, right = MRU
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  //* Helper Function | Removes LRU Node from the list
  remove(node: Node): void {
    // [prev]⇿[node]⇿[nxt] => [prev]⇿[nxt]
    const prev = node.prev;
    const next = node.next;
    prev!.next = next;
    next!.prev = prev;
  }

  //* Helper Function | Inserts MRU node to the list
  insert(node: Node): void {
    // [Left Sentinel]⇿[...]⇿[prev MRU]⇿[Right Sentinel] => [Left Sentinel]⇿[...]⇿[prev MRU]⇿[node (new MRU)]⇿[Right Sentinel]
    const prev = this.right.prev;
    const next = this.right;
    prev!.next = next!.prev = node;
    node.next = next;
    node.prev = prev;
  }

  //* Returns the value of the key from the cache (hash map).
  get(key: number): number {
    if (key in this.cache) {
      this.remove(this.cache[key]);
      this.insert(this.cache[key]);
      return this.cache[key].val;
    }
    return -1;
  }

  //* Get MRU
  getNewest(): number {
    return this.right.prev!.val;
  }

  //* Get LRU
  getOldest(): number {
    return this.left.next!.val;
  }

  put(key: number, value: number): void {
    if (key in this.cache) {
      this.remove(this.cache[key]);
    }
    this.cache[key] = new Node(key, value);
    this.insert(this.cache[key]);

    if (this.cache.size > this.cap) {
      const lru: Node = this.left.next!;
      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }
}

// For better understanding
const cache = new LRUCache(5);
cache.put(1, 10);
cache.put(2, 20);
cache.put(3, 30);
cache.put(4, 40);
cache.put(5, 50);
