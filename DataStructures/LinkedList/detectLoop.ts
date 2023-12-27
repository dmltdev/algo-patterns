export { Node } from "./SinglyLinkedList.ts";

function detectLoop(Head: Node) {
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

function detectLoop2() {
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

function detectLoop3() {
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
