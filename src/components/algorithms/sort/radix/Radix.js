import React, {useState} from 'react';
import SortModel from '../SortModel.js';

const Radix = () => {
  var [sortedArray, setSortedArry] = useState([]);

  const handleSort = (array) => {
    var getDigit = (num, i) => {
      return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    }
    
    var digitCount = (num) => {
      if (num === 0) return 1;
      return Math.floor(Math.log10(Math.abs(num))) + 1;
    }
    
    var mostDigits = (nums) => {
      let maxDigits = 0;
      for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
      }
      return maxDigits;
    }
    
    var radixSort = (nums) => {
        let maxDigitCount = mostDigits(nums);
        for(let k = 0; k < maxDigitCount; k++){
            let digitBuckets = Array.from({length: 10}, () => []);
            for(let i = 0; i < nums.length; i++){
                let digit = getDigit(nums[i],k);
                digitBuckets[digit].push(nums[i]);
            }
            nums = [].concat(...digitBuckets);
        }
        return nums;
    }

    setSortedArry(radixSort(array));
  }

  return (
    <SortModel 
      onSort={(array) => handleSort(array)} 
      sortedArray={sortedArray}
      hint='for the length of longest number we should loop and place numbers in 10 buckets 0 to 9 and for each of these loops we place numbers according to their first, second, third, ... digit.'
    />
  );
}

export default Radix;