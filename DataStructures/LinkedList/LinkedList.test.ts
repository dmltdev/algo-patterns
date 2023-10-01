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
    // Popping from an empty list
    expect(linkedList.pop()).toBeNull();
    expect(linkedList.length).toBe(0);

    // Popping from a list with one node
    linkedList.insertAtTail(1);
    expect(linkedList.pop().value).toBe(1);
    expect(linkedList.length).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    // Popping from a list with multiple nodes
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);
    linkedList.insertAtTail(3);
    expect(linkedList.pop().value).toBe(3);
    expect(linkedList.pop().value).toBe(2);
    expect(linkedList.pop().value).toBe(1);
    expect(linkedList.pop()).toBeNull();
    expect(linkedList.length).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it("#shift", () => {
    // Shifting from an empty list
    expect(linkedList.shift()).toBeNull();
    expect(linkedList.length).toBe(0);

    // Shifting from a list with one node
    linkedList.insertAtTail(1);
    expect(linkedList.shift()?.value).toBe(1);
    expect(linkedList.length).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    // Shifting from a list with multiple nodes
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);
    linkedList.insertAtTail(3);
    expect(linkedList.shift()?.value).toBe(1);
    expect(linkedList.shift()?.value).toBe(2);
    expect(linkedList.shift()?.value).toBe(3);
    expect(linkedList.shift()).toBeNull();
    expect(linkedList.length).toBe(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it("#getHead", () => {
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    const tail = linkedList.getTail();
    const head = linkedList.getHead();
    expect(linkedList.getHead()).not.toEqual(tail);
    expect(tail.value).toBe(2);
    expect(head.value).toBe(1);
  });

  it("#getTail", () => {
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    const head = linkedList.getHead();
    expect(head.value).toBe(1);
    expect(linkedList.getTail()).not.toEqual(head);
  });
});
