import React, {useState} from 'react';
import _ from 'lodash';
import {swap} from '../../../../functions';
import SortModel from '../SortModel.js';

const Bubble = () => {
  var [sortedArray, setSortedArry] = useState([]);

  const handleSort = (array) => {
    var nums = _.map(array.split(','), num => Number.parseInt(num));
    var length = nums.length;

    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (nums[j] > nums[j+1]) {
          nums = swap(nums, j, j+1);
        }
      }
    }

    setSortedArry(nums)
  }

  return <SortModel onSort={(array) => handleSort(array)} sortedArray={sortedArray}/>
}

export default Bubble;