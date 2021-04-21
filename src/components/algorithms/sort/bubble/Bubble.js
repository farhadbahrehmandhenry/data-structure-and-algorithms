import React, {useState} from 'react';
import {swap} from '../../../../functions';
import SortModel from '../SortModel.js';

const Bubble = () => {
  var [sortedArray, setSortedArry] = useState([]);

  const handleSort = (array) => {
    var noSwaps;

    for (var i = array.length; i > 0; i--) {
      noSwaps = true;

      for (var j = 0; j < i - 1; j++) {
        if (array[j] > array[j+1]) {
          [array[j], array[j+1]] = [array[j+1], array[j]];
          noSwaps = false;
        }
      }

      if (noSwaps) break;
    }

    setSortedArry(array)
  }

  return (
    <SortModel 
      onSort={(array) => handleSort(array)} 
      sortedArray={sortedArray}
      hint='compare nums two by to and swap them until largest bubbles at the end'
    />
  );
}

export default Bubble;