import React, {useState} from 'react';
import SortModel from '../SortModel.js';

const Quick = () => {
  var [sortedArray, setSortedArry] = useState([]);

  const handleSort = (array) => {

    var pivot = (arr, start = 0, end = arr.length - 1) => {
      const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
      };
    
      // We are assuming the pivot is always the first element
      let pivot = arr[start];
      let swapIdx = start;
    
      for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
          swapIdx++;
          swap(arr, swapIdx, i);
        }
      }
    
      // Swap the pivot from the start the swapPoint
      swap(arr, start, swapIdx);
      return swapIdx;
    }
    
    
    var quickSort = (arr, left = 0, right = arr.length -1) => {
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
        return arr;
    } 

    setSortedArry(quickSort(array))
  }

  return (
    <SortModel 
      onSort={(array) => handleSort(array)} 
      sortedArray={sortedArray}
      hint='select a pivot point. put the pivot in the right index counting smaller and bigger elements, and for left and right do the same thing recursively'
    />
  );
}

export default Quick;