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
    expect(queue.dequeue()).toBeUndefined(); // Queue should be empty
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
    expect(queue.peek()).toBeUndefined(); // Queue should be empty
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1); // Peeking shouldn't remove the element
  });

});
