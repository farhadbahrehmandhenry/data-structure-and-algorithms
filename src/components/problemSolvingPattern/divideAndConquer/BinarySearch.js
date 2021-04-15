function search(arr, n) {
  var min = 0;
  var max =arr.length - 1;

  while (min <= max) {
    var middle = Math.floor((max + min) / 2)

    if (arr[middle] > n) max = middle - 1;
    if (arr[middle] < n) min = middle + 1;
    else return middle;
  }

  return -1;
}