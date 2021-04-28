import React from 'react';

const BinaryHeap = () => {
//   class MaxBinaryHeap {
//     constructor(){
//         this.values = [];
//     }
//     insert(element){
//         this.values.push(element);
//         this.bubbleUp();
//     }
//     bubbleUp(){
//         let idx = this.values.length - 1;
//         const element = this.values[idx];
//         while(idx > 0){
//             let parentIdx = Math.floor((idx - 1)/2);
//             let parent = this.values[parentIdx];
//             if(element <= parent) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }
// }

// let heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);

  return (
    <div>
      <li>one type of tree</li>
      <li>minBinaryHeap: parent is aways smaller than children</li>
      <li>maxBinaryHeap: parent is aways greater than children</li>
      <li>for index n parent, children are in 2n+1 and 2n+2</li>
      <li>for index n child, parent are in (n-1)/2</li>
    </div>
  );
}

export default BinaryHeap;