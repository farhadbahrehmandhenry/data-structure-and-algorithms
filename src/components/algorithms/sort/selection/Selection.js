import React, {useState} from 'react';
import SortModel from '../SortModel.js';

const Selection = () => {
  var [sortedArray, setSortedArry] = useState([]);

  const handleSort = (array) => {
    for (var i = 0; i < array.length; i++) {    
      var minIndex = i;
  
      for (var j = i+1; j < array.length; j++) {    
        if (array[minIndex] > array[j]) minIndex = j;
      }
  
      if (i !== minIndex) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }

    setSortedArry(array)
  }

  return (
    <SortModel 
      onSort={(array) => handleSort(array)} 
      sortedArray={sortedArray}
      hint='select min in array and swap with first index in loop'
    />
  );
}

export default Selection;