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

  test("Cache nodes are rearranged after retrieval and evicted when capacity is exhausted", () => {
    cache.put(1, 10);
    cache.put(2, 20);
    cache.put(3, 30);
    cache.put(4, 40);
    cache.put(5, 50);

    cache.get(1);
    const lruNodeValue = cache.left.next.val;
    expect(lruNodeValue).toEqual(20);

    const mruNodeValue = cache.right.prev.val;
    expect(mruNodeValue).toEqual(10);
  })
});
