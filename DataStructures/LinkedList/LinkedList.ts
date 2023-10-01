interface ListNode {
  value: number;
  prev: null | ListNode;
  next: null | ListNode;
}

interface ListHeadNode extends ListNode {
  next: ListNode;
}

interface ListTailNode extends ListNode {
  prev: ListNode;
}

interface ListInnerNode extends ListNode {
  prev: ListNode;
  next: ListNode;
}

function assertNode(node: null | ListNode): node is ListNode {
  return node !== null;
}
function assertHeadNode(node: ListNode): node is ListHeadNode {
  return node.next !== null;
}
function assertTailNode(node: ListNode): node is ListTailNode {
  return node.prev !== null;
}
function assertInnerNode(node: ListNode): node is ListInnerNode {
  return node.prev !== null && node.next !== null;
}

export default class LinkedList {
  public head: null | ListNode;
  public tail: null | ListNode;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertAtHead(this: LinkedList, value: number): ListNode {
    const newHeadNode: ListNode = { value, prev: null, next: null };
    switch (this.length) {
      case 0:
        this.head = newHeadNode;
        this.tail = newHeadNode;
        break;
      default:
        if (assertNode(this.head)) {
          newHeadNode.next = this.head;
          this.head.prev = newHeadNode;
          this.head = newHeadNode;
        }
        break;
    }
    ++this.length;
    return newHeadNode;
  }

  insertAtTail(value: number): ListNode {
    const newTailNode: ListNode = { value, prev: null, next: null };
    switch (this.length) {
      case 0:
        this.head = newTailNode;
        this.tail = newTailNode;
        break;
      default:
        if (assertNode(this.tail)) {
          newTailNode.prev = this.tail;
          this.tail.next = newTailNode;
          this.tail = newTailNode;
        }
        break;
    }
    ++this.length;
    return newTailNode;
  }

  pop(): ListNode | null {
    if (assertNode(this.tail)) {
      const poppedNode = this.tail;
      --this.length;
      switch (this.length) {
        case 0:
          this.head = null;
          this.tail = null;
          break;
        default:
          this.tail = poppedNode.prev;
          if (assertNode(this.tail)) {
            this.tail.next = null;
          }
          poppedNode.prev = null;
          poppedNode.next = null;
          break;
      }
      return poppedNode;
    } else return null;
  }

  shift(): ListNode | null {
    if (assertNode(this.head)) {
      const poppedNode = this.head;
      --this.length;
      switch (this.length) {
        case 0:
          this.head = null;
          this.tail = null;
          break;
        default:
          this.head = poppedNode.next;
          if (assertNode(this.head)) {
            this.head.prev = null;
          }
          poppedNode.prev = null;
          poppedNode.next = null;
          break;
      }
      return poppedNode;
    } else return null;
  }

  getHead(): null | ListNode {
    return this.head;
  }

  getTail(): null | ListNode {
    return this.tail;
  }

  reverse(): LinkedList {
    switch (this.length) {
      case 0:
      case 1:
        return this;
      default:
        let iter = this.head;
        while (assertNode(iter)) {
          [iter.next, iter.prev] = [iter.prev, iter.next];
          iter = iter.prev;
        }
        [this.head, this.tail] = [this.tail, this.head];
        break;
    }

    return this;
  }
}

function ListFromValues(...values: number[]): LinkedList {
  const ll: LinkedList = new LinkedList();
  for (let i = 0; i < values.length; i++) {
    ll.insertAtTail(values[i]);
  }
  return ll;
}

function printLinkedList(list: LinkedList) {
  let node = list.getHead();
  while (assertNode(node)) {
    console.log(node.value);
    node = node.next;
  }
}

function printLinkedListInReverse(list: LinkedList) {
  let node = list.getTail();
  while (assertNode(node)) {
    console.log(node.value);
    node = node.prev;
  }
}
