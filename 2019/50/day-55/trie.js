class Node {
  constructor(data) {
    this.data = data;
    this.isWord = false;
    this.prefixes = 0;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node('');
  }

  insert(word) {
    if (this.root == null) {
      this.root = new Node(word);
    } else {
      this.insertNode(this.root, word);
    }
  }

  insertNode(node, word) {
    if(!node || !word) {
      return null;
    }

    node.prefixes++;

    const letter = word.charAt(0);
    const remainder = word.substring(1);
    let child = node.children[letter];

    if(!child) {
      child = new Node(letter);
      node.children[letter] = child;
    }

    if(!remainder) {
      child.isWord = true;
    }

    this.insertNode(child, remainder);
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    const queue = [this.root];
    let counter = 0;

    while(queue.length) {
      const node = queue.shift();

      if(node.isWord) {
        counter++;
      }
      for(let child in node.children) {
        if(node.children.hasOwnProperty(child)) {
          queue.push(node.children[child]);
        }
      }
    }
    return counter;
  };

  getRoot() {
    return this.root;
  }

  get() {
    const words = [];
    const word = '';
    this.getNode(this.root, words, word);

    return words;
  }

  getNode(node, words, word) {
    for(let child in node.children) {
      if(node.children.hasOwnProperty(child)) {
        word += child;
        if (node.children[child].isWord) {
          words.push(word);
        }
        this.getNode(node.children[child], words, word);
        word = word.substring(0, word.length - 1);
      }
    }
  };

  search(word) {
    if(!this.root) {
      return false;
    }

    return this.searchNode(this.root, word);
  }

  searchNode(node, word) {
    if(!node || !word) {
      return false;
    }

    const letter = word.charAt(0);
    const child = node.children[letter];

    if(child) {
      const remainder = word.substring(1);

      if(!remainder && child.isWord) {
        return true;
      } else {
        return this.searchNode(child, remainder);
      }
    } else {
      return false;
    }
  }

  remove(word) {
    if(!this.root) {
      return;
    }

    if(this.get(word)) {
      this.removeNode(this.root, word);
    }
  }

  removeNode(node, word) {
    if(!node || !word) {
      return;
    }

    node.prefixes--;
    const letter = word.charAt(0);
    const child = node.children[letter];

    if(child) {
      const remainder = word.substring(1);
      if(remainder) {
        if(child.prefixes === 1) {
          delete node.children[letter];
        } else {
          this.removeNode(child, remainder);
        }
      } else {
        if(child.prefixes === 0) {
          delete node.children[letter];
        } else {
          child.isWord = false;
        }
      }
    }
  }

  toString() {
    const newline = new Node('-');
    const queue = [this.root, newline];
    let string = '';

    while(queue.length) {
      const node = queue.shift();
      string += `${node.data.toString()} `;

      if(node === newline && queue.length) {
        queue.push(newline);
      }

      for(let child in node.children) {
        if(node.children.hasOwnProperty(child)) {
          queue.push(node.children[child]);
        }
      }
    }

    return string.slice(0, -2).trim().replace('- ', '');
  };
}
