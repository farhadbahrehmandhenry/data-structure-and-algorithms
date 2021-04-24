import React from 'react';

const DepthFirstSearch = () => {
  class Node {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    
    DFSPreOrder() {
      var data = [];
      var currentNode = this.root;
  
      var helperDFS = (node) => {
        data.push(node.value);
  
        if (node.left) helperDFS(node.left);
        if (node.right) helperDFS(node.right);
      }
  
      helperDFS(currentNode);
  
      return data;
    }
  
    DFSPostOrder() {
      var data = [];
      var currentNode = this.root;
  
      var helperDFS = (node) => {
        if (node.left) helperDFS(node.left);
        if (node.right) helperDFS(node.right);
  
        data.push(node.value);
      }
  
      helperDFS(currentNode);
  
      return data;
    }
  
    DFSInOrder() {
      var data = [];
      var currentNode = this.root;
  
      var helperDFS = (node) => {
        if (node.left) helperDFS(node.left);
        data.push(node.value);
        if (node.right) helperDFS(node.right);
      }
  
      helperDFS(currentNode);
  
      return data;
    }
  }

  return (
    <div>
      <li>search vertically</li>
      <li>use recursive</li>
      <li>it's the most efficient if the tree is wide but not too deep</li>
      <li>preOrder:</li>
      <li>visit node, then left, then right</li>
      <li>root is first element in returned</li>
      <li>postOrder:</li>
      <li>visit most left, then right, then node</li>
      <li>root is last element in returned</li>
      <li>inOrder:</li>
      <li>visit most left, then node, then right</li>
      <li>root is somewhere in the middle in returned</li>
    </div>
  );
}

export default DepthFirstSearch;