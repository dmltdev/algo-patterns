class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return this;
  }

  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      this.head = node;
      temp.prev = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return this;
  }
}

let list = new DoublyLinkedList();

list.unshift(1);

console.log(list);
