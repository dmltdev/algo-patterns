import { link } from "fs";
import LinkedList from "./LinkedList";

describe("Linked List", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("#Instantiates", () => {
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
    expect(linkedList.length).toBe(0);
  });

  it("#insertAtHead", () => {
    linkedList.insertAtHead(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.length).toBe(1);

    linkedList.insertAtHead(2);
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.head.next.value).toBe(1);
    expect(linkedList.length).toBe(2);
  });

  it("#insertAtTail", () => {
    linkedList.insertAtTail(1);
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.length).toBe(1);

    linkedList.insertAtTail(2);
    expect(linkedList.tail.value).toBe(2);
    expect(linkedList.tail.prev.value).toBe(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.length).toBe(2);
  });

  it("#pop", () => {
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);
    expect(linkedList.length).toBe(2);
    expect(linkedList.tail.value).toBe(2);
    expect(linkedList.tail.prev.value).toBe(1);

    const poppedNode = linkedList.pop();
    expect(poppedNode.value).toBe(2);
    expect(poppedNode.prev).toBe(null);
    expect(linkedList.length).toBe(1);

    linkedList.pop();
    expect(linkedList.length).toBe(0);
    expect(linkedList.tail).toBeNull();
    expect(linkedList.head).toBeNull();

    expect(linkedList.pop()).toBeNull();
  });

  it("#shift", () => {
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);
    linkedList.insertAtTail(3);

    expect(linkedList.head.value).toBe(1);
    linkedList.shift();
    expect(linkedList.head.value).toBe(2);
    linkedList.shift();
    expect(linkedList.head.value).toBe(3);
    linkedList.shift();
    expect(linkedList.head).toBeNull();
  });

  it("#getHead", () => {
    const head = linkedList.head,
    tail = linkedList.tail;
    expect(linkedList.getHead()).toEqual(head);
    expect(linkedList.getHead()).not.toEqual(tail);
  })

  it("#getTail", () => {
    const tail = linkedList.tail;
    expect(linkedList.getTail()).toEqual(tail);
  })
});
