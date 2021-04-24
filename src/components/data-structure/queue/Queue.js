import React from 'react';

const Queue = () => {
  // from array =>
  // var stack = [];
  // stack.push(x);
  // stack.shift();
  // or
  // stack.unshift(x);
  // stack.pop();


  // from scratch => add to end remove from first
//   class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     enqueue(val){
//         var newNode = new Node(val);
//         if(!this.first){
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             this.last.next = newNode;
//             this.last = newNode;
//         }
//         return ++this.size;
//     }

//     dequeue(){
//         if(!this.first) return null;

//         var temp = this.first;
//         if(this.first === this.last) {
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }
// }

  return (
    <div>
      <li>collection of data</li>
      <li>first in, first out</li>
      <li>a queue or line</li>
      <li>waiting to join a room or game</li>
      <li>print queue</li>
    </div>
  );
}

export default Queue;