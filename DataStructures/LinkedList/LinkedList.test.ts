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
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.length).toBe(2);
  });

  it("Pops the tail of the list", () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.length).toBe(3);
    expect(linkedList.tail.value).toBe(3);

    linkedList.pop();
    expect(linkedList.length).toBe(2);
    expect(linkedList.tail.value).toBe(2);

    // linkedList.pop();
    // expect(linkedList.length).toBe(1);
    // expect(linkedList.tail.value).toBe(1);

    // linkedList.pop();
    // expect(linkedList.length).toBe(0);
    // expect(linkedList.tail).toBe(null);
  });

  it.todo("Removes the head of the list");
  it.todo("Assigns the value as a new head of the list");
  it.todo("Gets the node at a given index and returns it");
  it.todo(
    "Sets the new value of the node at the given index and returns boolean"
  );
  it.todo("Inserts the value at a given index of the list");
  it.todo(
    "Reverses the list and all pointers so that the head becomes the tail and the tail becomes the head"
  );
});
