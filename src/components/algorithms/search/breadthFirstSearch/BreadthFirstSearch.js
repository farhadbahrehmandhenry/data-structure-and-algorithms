import React from 'react';

const BreadthFirstSearch = () => {
  // class Node {
  //   constructor(val) {
  //     this.value = val;
  //     this.left = null;
  //     this.right = null;
  //   }
  // }
  
  // class BinarySearchTree {
  //   constructor() {
  //     this.root = null;
  //   }
  
  //   BFS() {
  //     var data = [];
  //     var queue = [];
  //     var currentNode = this.root;
  
  //     if (this.root === null) return false;
  
  //     queue.push(currentNode);
  
  //     while (queue.length > 0) {
  //       currentNode = queue.shift();
  //       data.push(currentNode.value);
  
  //       if (currentNode.left) queue.push(currentNode.left)
  //       if (currentNode.right) queue.push(currentNode.right)
  //     }
  
  //     return data;
  //   }
  // }
  return (
    <div>
      <li>search the tree horizontally - children on same the level</li>
      <li>use queue</li>
      <li>it's most efficient if tree has one single branch no matter how long</li>
      <li>push the root to queue. while queue is not empty shift the queue and push the shifted element to an array. if shifted array has left and right, push them to queue respetively</li>
    </div>
  );
}

export default BreadthFirstSearch;