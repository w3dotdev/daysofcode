const items = new WeakMap();

class Stack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const temp = items.get(this);
    temp.push(element);
  }

  pop() {
    const temp = items.get(this);
    temp.pop();
  }

  peek() {
    const temp = items.get(this);
    return temp[temp.length - 1];
  }

  isEmpty() {
    const temp = items.get(this);
    return temp.length === 0;
  }

  size() {
    const temp = items.get(this);
    return temp.length;
  }

  clear() {
    const temp = items.get(this);
    temp.length = 0;
  }
}

