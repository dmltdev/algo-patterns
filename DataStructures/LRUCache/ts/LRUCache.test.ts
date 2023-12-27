import LRUCache from "./LRUCache.ts";

describe("LRUCache", () => {
  let cache;

  beforeEach(() => {
    const capacity = 5;
    cache = new LRUCache(capacity);
  });

  test("Initializes empty", () => {
    expect(cache.get(1)).toBe(-1);
  });

  test("Cache nodes are inserted and retrievable", () => {
    cache.put(1, 10);
    cache.put(2, 20);
    cache.put(3, 30);

    expect(cache.get(1)).toBe(10);
    expect(cache.get(2)).toBe(20);
    expect(cache.get(3)).toBe(30);
  });

  test("Cache nodes are rearranged after retrieval", () => {
    cache.put(1, 10);
    cache.put(2, 20);
    cache.put(3, 30);
    cache.put(4, 40);
    cache.put(5, 50);

    cache.get(1);
    //* Remember about sentinel nodes
    const lru = cache.left.next.val;
    expect(lru).toEqual(20);

    const mru = cache.right.prev.val;
    expect(mru).toEqual(10);
  });

  test("Cache items are evicted when capacity is exhausted", () => {
    cache.put(1, 10);
    cache.put(2, 20);
    cache.put(3, 30);
    cache.put(4, 40);
    cache.put(5, 50);
    cache.put(6, 60); //! Exceeds the capacity

    expect(cache.getOldest()).toEqual(20);
    expect(cache.getNewest()).toEqual(60);
  });
});
