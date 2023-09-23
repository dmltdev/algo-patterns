import Queue from './Queue';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should enqueue and dequeue elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should return the length of the queue', () => {
    expect(queue.length).toBe(0);

    queue.enqueue(1);
    expect(queue.length).toBe(1);

    queue.enqueue(2);
    expect(queue.length).toBe(2);

    queue.dequeue();
    expect(queue.length).toBe(1);
  });

  it('Should peek at the front element', () => {
    expect(queue.peek()).toBeUndefined();

    queue.enqueue(1);
    expect(queue.peek()).toBe(1);

    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  it("isEmpty should return true and false when expected", () => {
    expect(queue.isEmpty).toBe(true);

    queue.enqueue(1);
    expect(queue.isEmpty).toBe(false);

    queue.enqueue(2);
    expect(queue.isEmpty).toBe(false);
  })

  it("isFull should return true and false when expected", () => {
    expect(queue.isFull(0)).toBe(true);
    expect(queue.isFull(1)).toBe(false);

    queue.enqueue(1);
    expect(queue.isFull(1)).toBe(true);
    expect(queue.isFull(2)).toBe(false);

    queue.enqueue(2);
    expect(queue.isFull(2)).toBe(true);
    expect(queue.isFull(3)).toBe(false);
  })
});
