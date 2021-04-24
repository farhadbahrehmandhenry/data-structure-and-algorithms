import React, {useState} from 'react';
import SortModel from '../SortModel.js';

const Insertion = () => {
  var [sortedArray, setSortedArry] = useState([]);

  const handleSort = (array) => {
    for (var i = 1; i < array.length; i++) {  
      var currentVal = array[i];
  
      for (var j = i - 1; j >= 0 && currentVal < array[j]; j--) {   
        array[j+1] = array[j]; // move one ahead
      }
  
      // insert in correct place - j is the one that is not greater than currentVal so we put j+1
      // we can access j here because of block scope and var.
      array[j+1] = currentVal;
    }

    setSortedArry(array)
  }

  return (
    <SortModel 
      onSort={(array) => handleSort(array)} 
      sortedArray={sortedArray}
      hint='from begining, for each element, INSERT it on correct place on its left side'
    />
  );
}

export default Insertion;