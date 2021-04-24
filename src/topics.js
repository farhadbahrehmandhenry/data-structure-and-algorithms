export const topics = [
  {
    key: 'home', 
    children: {}
  },
  {
    key: 'dataStructure', 
    children: {
      lists: ['singlyLinkedList', 'doublyLinkedList'], 
      collections: ['stack', 'queue'],
      trees: ['binaryTree', 'binarySearchTree']
    } 
  },
  {
    key: 'algorithms', 
    children: {
      search: ['linear', 'binary', 'breadthFirstSearch', 'depthFirstSearch'], 
      sort: ['bubble', 'insertion', 'selection', 'merge', 'quick', 'radix']
    }
  },
  {
    key: 'recursion', 
    children: {}
  },
  {
    key: 'bigO', children: {}
  },
  {
    key: 'problemSolvingPattern', 
    children: {
      frequency: ['anagram'], 
      multiplePointer: [], 
      slidingWindow: [], 
      divideAndConquer: [], 
      backTracking: ['parantheses']
    }
  }
];