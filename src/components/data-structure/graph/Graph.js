import React from 'react';

const Graph = () => {
//   class Graph{
//     constructor(){
//         this.adjacencyList = {};
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//     }
//     addEdge(v1,v2){
//         this.adjacencyList[v1].push(v2);
//         this.adjacencyList[v2].push(v1);
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
//             v => v !== vertex2
//         );
//         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
//             v => v !== vertex1
//         );
//     }
//     removeVertex(vertex){
//         while(this.adjacencyList[vertex].length){
//             const adjacentVertex = this.adjacencyList[vertex].pop();
//             this.removeEdge(vertex, adjacentVertex);
//         }
//         delete this.adjacencyList[vertex]
//     }
//     depthFirstRecursive(start){
//         const result = [];
//         const visited = {};
//         const adjacencyList = this.adjacencyList;

//         (function dfs(vertex){
//             if(!vertex) return null;
//             visited[vertex] = true;
//             result.push(vertex);
//             adjacencyList[vertex].forEach(neighbor => {
//                 if(!visited[neighbor]){
//                     return dfs(neighbor)
//                 }
//             });
//         })(start);

//         return result;
//     }

//     breadthFirst(start){
//         const queue = [start];
//         const result = [];
//         const visited = {};
//         let currentVertex;
//         visited[start] = true;

//         while(queue.length){
//             currentVertex = queue.shift();
//             result.push(currentVertex);
           

//             this.adjacencyList[currentVertex].forEach(neighbor => {
//                 if(!visited[neighbor]){
//                     visited[neighbor] = true;
//                     queue.push(neighbor);
//                 }
//             });
//         }
        
//         return result;
//     }
// }



// let g = new Graph();

// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")


// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B","D")
// g.addEdge("C","E")
// g.addEdge("D","E")
// g.addEdge("D","F")
// g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]

  return (
    <div>
      <li>use like for social networking</li>
      <li>in tree there is only one way between nodes, but in Graph might be more depends on type of graph</li>
      <li>graph has vertex(node) and edge</li>
      <li>connection between vertex can be one or two ways</li>
    </div>
  );
}

export default Graph;