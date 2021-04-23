import React, {useState} from 'react';
import SortModel from '../SortModel.js';

const Merge = () => {
  var [sortedArray, setSortedArry] = useState([]);

  const handleSort = (array) => {
    var merge = (arr1, arr2) => {
      let results = [];
      let i = 0;
      let j = 0;
      while(i < arr1.length && j < arr2.length){
          if(arr2[j] > arr1[i]){
              results.push(arr1[i]);
              i++;
          } else {
              results.push(arr2[j])
              j++;
          }
      }
  
      while(i < arr1.length) {
          results.push(arr1[i])
          i++;
      }
      while(j < arr2.length) {
          results.push(arr2[j])
          j++;
      }
      return results;
  }
  
  // Recrusive Merge Sort
    var  mergeSort = (arr) => {
      if(arr.length <= 1) return arr;
      let mid = Math.floor(arr.length/2);
      let left = mergeSort(arr.slice(0,mid));
      let right = mergeSort(arr.slice(mid));
      return merge(left, right);
  }

    setSortedArry(mergeSort(array))
  }

  return (
    <SortModel 
      onSort={(array) => handleSort(array)} 
      sortedArray={sortedArray}
      hint='split the arrays until there is only one element in each, then merge sorted arrays two by two and sorting them while merging. at the end we have a sorted array'
    />
  );
}

export default Merge;