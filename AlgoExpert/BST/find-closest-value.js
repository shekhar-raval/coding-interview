function findClosestValueInBst(tree, target) {
  let closest = Infinity;
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else if (target < currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
