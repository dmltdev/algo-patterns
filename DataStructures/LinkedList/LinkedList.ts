class ListNode {
  public value: number | null;
  public next: ListNode | null;
  public prev: ListNode | null;

  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class LinkedList {
  private head: ListNode | null;
  private tail: ListNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: number): ListNode {
    // Pushes and assigns the value as a new tail
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length++;
    return this.tail;
  }

  pop(): ListNode | undefined {
    // Removes the tail of the list
    if (!this.head) return undefined;

    if (this.length === 1) {
      const poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return poppedNode;
    }
    let current = this.head,
      newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift(): ListNode | undefined {
    // Removes the head of the list
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  unshift(value: number): ListNode {
    // Assigns the value as a new head of the list
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.head;
  }

  get(index: number): ListNode | null {
    // Gets the node at a given index and returns it
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter !== this.length && current !== null) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index: number, value: number): boolean {
    // Sets the new value of the node at the given index
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: number): ListNode | boolean {
    // Inserts the value at a given index of the list
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new ListNode(value);
    const prev = this.get(index - 1);

    if (prev !== null) {
      const temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  reverse() {
    // Reverses the list and all pointers so that the head becomes the tail and the tail becomes the head
    if (!this.head) {
      return undefined;
    }

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next, prev;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}
