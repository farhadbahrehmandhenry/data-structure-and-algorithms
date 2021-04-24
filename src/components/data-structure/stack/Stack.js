import React from 'react';

const Stack = () => {
  // from array =>
  // var stack = [];
  // stack.push(x);
  // stack.pop();
  // or
  // stack.unshift(x)
  // stack.shift()


  // from scratch => add to first remove from first
  // class Node {
  //   constructor(value){
  //       this.value = value;
  //       this.next = null;
  //   }
  // }

  // class Stack {
  //   constructor(){
  //       this.first = null;
  //       this.last = null;
  //       this.size = 0;
  //   }
  //   push(val){
  //       var newNode = new Node(val);
  //       if(!this.first){
  //           this.first = newNode;
  //           this.last = newNode;
  //       } else {
  //           var temp = this.first;
  //           this.first = newNode;
  //           this.first.next = temp;
  //       }
  //       return ++this.size;
  //   }
  //   pop(){
  //       if(!this.first) return null;
  //       var temp = this.first;
  //       if(this.first === this.last){
  //           this.last = null;
  //       }
  //       this.first = this.first.next;
  //       this.size--;
  //       return temp.value;
  //   }
  // }

  return (
    <div>
      <li>collection of data</li>
      <li>last in, first out</li>
      <li>call stack</li>
      <li>enables UNDO and REDO feature</li>
      <li>history object</li>
    </div>
  );
}

export default Stack;