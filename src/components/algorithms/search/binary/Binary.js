import React, {useState} from 'react';
import SearchModel from '../SearchModel.js';

// binery search should be performed on a sorted list
const Binary = () => {
  var [searchedIntIndex, setSearchedIntIndex] = useState(null);

  const handleSearch = (array, value) => {
    var min = 0;
    var max = array.length - 1;

    while (min <= max) {
      var middle = Math.floor((max + min) / 2)

      if (array[middle] > value) max = middle - 1;
      if (array[middle] < value) min = middle + 1;
      else if (array[middle] === value){
        setSearchedIntIndex(middle);
        return; 
      }
    }
  
    setSearchedIntIndex(-1);
    
    return;
  }

  return (
    <SearchModel 
      onSearch={(array, value) => handleSearch(array, value)} 
      searchedIntIndex={searchedIntIndex}
      hint='binery search should be performed on a sorted list'
    />
  )
}

export default Binary;