class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.next = null;
  }

  push(data) {
    let newNode = new ListNode(data);

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

  detectLoop() {
    /*
        Floyd's cycle-finding algorithm, also known as the "tortoise and the hare" algorithm, 
        to detect loops in a linked list. 
        It uses two pointers, slowPtr and fastPtr, starting from the head of the linked list.
        The slowPtr moves one step at a time, while the fastPtr moves two steps at a time. 
        If there is a loop in the linked list, eventually, the fastPtr will catch up to the slowPtr inside the loop.
        */
    let slowPtr = this.head;
    let fastPtr = this.head;

    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;

      if (slowPtr === fastPtr) {
        return true;
      }
    }

    return false;
  }

  detectLoop2() {
    let set = new Set();
    while (this.head) {
      if (set.has(this.head)) {
        return true;
      }

      set.add(this.head);
      this.head = this.head.next;
    }

    return false;
  }

  detectLoop3() {
    let current = this.head;

    while (current) {
      if (current.seen) {
        return true;
      }
      current.seen = true;
      current = current.next;
    }

    return false;
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

export default LinkedList;
