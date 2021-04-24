import React from 'react';

const BinarySearchTree = () => {
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
  
  //   insert(val) {
  //     var newNode = new Node(val);
  
  //     if (!this.root) {
  //       this.root = newNode;
  //       return this;
  //     }
  //     else {
  //       var currentNode = this.root;
  
  //       while (true) {
  //         if(val === currentNode.value) return undefined;
  
  //         if (currentNode.value > val) {
  //           if (!currentNode.left) {
  //             currentNode.left = newNode;
  //             return this;
  //           }
     
  //           currentNode = currentNode.left;
  //         }
  //         else {
  //           if (!currentNode.right) {
  //             currentNode.right = newNode;
  //             return this;
  //           }
  
  //           currentNode = currentNode.right; 
  //         }
  //       }
  //     }
  //   }
  
  //   find(val) {
  //     if (this.root === null) return false;
  
  //     var currentNode = this.root;
  //     var found = false;
  
  //     while (currentNode && !found) {
  //       if (currentNode.value > val) currentNode = currentNode.left;
  //       else if (currentNode.value < val) currentNode = currentNode.right;
  //       else found = true;
  //     }
  
  //     if (!found) return undefined;
  //     return currentNode;
  //   }
  // }

  return (
    <div>
      <li>one type of binary tree, but sorted</li>
      <li>all nodes on <b>LEFT</b> side of each node is <b>SMALLER</b> than the node</li>
      <li>all nodes on <b>RIGHT</b> side of each node is <b>GREATER</b> than the node</li>
      <li>it's good for search because it's already sorted</li>
    </div>
  );
}

export default BinarySearchTree;