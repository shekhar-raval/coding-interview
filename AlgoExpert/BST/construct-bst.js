class BST {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    let currentNode = this;
    while (currentNode != null) {
      if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = new BST(value)
        } else {
          currentNode = currentNode.right;
        }
      } else if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value)
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    return this;
  }

  contains(value) {
    let currentNode = this;
    while (currentNode != null) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(value) {

  }

  getMinValue() {
    let currentNode = this;
    while (currentNode !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

exports.BST = BST;