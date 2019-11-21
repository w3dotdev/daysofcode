class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

const defaultEquals = (a, b) => {
  return a === b;
}

const defaultCompare = (a, b) => {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
