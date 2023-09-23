/* 
A queue is similar to the ticket queue inside a cinema hall, 
where the first person entering the queue is the first person who gets the ticket.

Queue follows the "First In, First Out" (FIFO) rule - the item that goes in first is the item that comes out first.

Putting items in the queue is called enqueue, 
And removing items from the queue is called dequeue.

Basic Operations of Queue:
- Enqueue, O(1): Add an element to the end of the queue
- Dequeue, O(1): Remove an element from the front of the queue
- IsEmpty, O(1):  Check if the queue is empty
- IsFull, O(1): Check if the queue is full
- Peek, O(1): Get the value of the front of the queue without removing it;

When to use queue:
- CPU scheduling, Disk Scheduling
- When data is transferred asynchronously between two processes.The queue is used for synchronization. For example: IO Buffers, pipes, file IO, etc
- Handling of interrupts in real-time systems.
- Call Center phone systems use Queues to hold people calling them in order.
*/

type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.tail) {
      this.tail = this.head = { value: item } as Node<T>;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;

    head.next = undefined;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  get isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(maxCapacity: number): boolean {
    return this.length === maxCapacity;
  }
}
