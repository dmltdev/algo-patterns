export class Node<T> {
  public data: T;
  public next: Node<T> | null;
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class SinglyLinkedList<T> {
  public head: Node<T> | null;
  public next: Node<T> | null;

  constructor(head: Node<T>) {
    this.head = head || null;
    this.next = null;
  }

  push(data: T) {
    let newNode: Node<T> = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  reverse() {
    let head = this.head;
    if (head === null) return;

    let currentNode = head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
      nextNode = null;
    }

    head = prevNode;
    return head;
  }
}

//! Tests
let list = new LinkedList();
for (let i = 0; i < 11; i++) {
  // push 11 nodes to linked list
  list.push(i);
}

const reverseList = function (linkedList) {
  let head = linkedList.head; // head node of the linked list
  if (head === null) return; // the function immediately returns if there is nothing to reverse

  let currentNode = head; // keep track of current node being processed
  let prevNode = null; // keep track of the previous node
  let nextNode = null; // temporarily store the next node in the original list

  while (currentNode) {
    // iterate until null
    nextNode = currentNode.next; // preserve the reference to the next node before modifying it
    currentNode.next = prevNode; // reverse the link from the current node to the previous node
    prevNode = currentNode; // the current node becomes the previous node
    currentNode = nextNode; // moves current node to the next node for further iteration
  }

  head = prevNode; // prevNode points to the new head of the reversed list
  return head;
};

console.log(list);
console.log(reverseList(list));
console.log(list.detectLoop());
console.log(list.detectLoop2());
