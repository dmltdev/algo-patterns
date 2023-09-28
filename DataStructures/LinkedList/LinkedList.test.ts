import { link } from "fs";
import LinkedList from "./LinkedList";

describe("Linked List", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("Linked list instantiates with an empty head, tail, and 0 length", () => {
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
    expect(linkedList.length).toBe(0);
  });

  it("Pushes and assigns value as a new tail", () => {
    linkedList.push(1);
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.length).toBe(1);

    linkedList.push(2);
    expect(linkedList.tail.value).toBe(2);
    expect(linkedList.tail.prev.value).toBe(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.length).toBe(2);
  });

  it("Pops the tail of the list", () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.length).toBe(3);
    expect(linkedList.tail.value).toBe(3);
    expect(linkedList.tail.prev.value).toBe(2);

    linkedList.pop();
    expect(linkedList.length).toBe(2);
    expect(linkedList.tail.value).toBe(2);
    expect(linkedList.tail.prev.value).toBe(1);

    linkedList.pop();
    expect(linkedList.length).toBe(1);
    expect(linkedList.tail.value).toBe(1);

    linkedList.pop();
    expect(linkedList.length).toBe(0);
    expect(linkedList.tail).toBeNull();
    expect(linkedList.head).toBeNull();

    expect(linkedList.pop()).toBeNull();
  });

  it("Removes the head of the list", () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.head.value).toBe(1);
    linkedList.shift();
    expect(linkedList.head.value).toBe(2);
    linkedList.shift();
    expect(linkedList.head.value).toBe(3);
    linkedList.shift();
    expect(linkedList.head).toBeNull();

  });

  it("Assigns the value as a new head of the list", () => {
    linkedList.unshift(1);
    expect(linkedList.head.value).toBe(1);

    linkedList.unshift(2);
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.head.next.value).toBe(1);
  });

  it("Gets the node at a given index and returns it", () => {

    // TODO: Fix tests so that it gives expected results on lines 89 and 94.
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.length).toBe(3);
    let foundNode = linkedList.get(0);
    // expect(foundNode).not.toBeNull();
    expect(foundNode!.value).toBe(1);
    expect(foundNode!.next!.value).toBe(2);

    foundNode = linkedList.get(2);
    // expect(foundNode).not.toBeNull();
    expect(foundNode!.value).toBe(3);
    expect(foundNode.next).toBeNull();

    foundNode = linkedList.get(-1); // Outside the boundary
    expect(foundNode).toBeNull();

    foundNode = linkedList.get(3); // Outside the boundary
    expect(foundNode).toBeNull();
  });

  it.todo(
    "Sets the new value of the node at the given index and returns boolean"
  );
  it.todo("Inserts the value at a given index of the list");
  it.todo(
    "Reverses the list and all pointers so that the head becomes the tail and the tail becomes the head"
  );
});
