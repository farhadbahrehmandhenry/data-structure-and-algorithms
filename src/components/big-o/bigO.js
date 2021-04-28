// O(1) < O(LOGN) < O(N) < O(NLOGN) < O(N^2) < O(2^N) < O(N!)
// accessing a value from array < binary search < for loop over n items < merge sort < nested for loop over n items < recursive fionacci < recursive function that has a loop inside
//////////////////////////////////////
// linear search 
// best O(1) 
// worst O(n)
// average O(n)

// binary search
// best O(1)
// worst O(logn) for a 16 long array it takes 4 moves => log 32 = 5
// average O(logn)

///////////////////////////////////////
// bubble sort
// best O(n)
// worst O(n^2)
// average O(n^2)
// space O(1) => it's done in place without any auxilary data structure

// insertion sort
// best O(n)
// worst O(n^2)
// average O(n^2)
// space O(1) => it's done in place without any auxilary data structure

// selection sort
// best O(n^2)
// worst O(n^2)
// average O(n^2)
// space O(1) => it's done in place without any auxilary data structure

// merge sort
// best O(nlogn) => logn is for spliting the array to get the smallest array log 32 = 5(splitting) //// and merge has O(n)
// worst O(nlogn)
// average O(nlogn)
// space O(n)

// quick sort
// best O(nlogn) => logn is for spliting the array to get the smallest array log 32 = 5(splitting) //// and comparison has O(n)
// average O(nlogn)
// worst O(n) => if data is already sorted
// space O(logn)

// radix sort
// best O(nk) => n number of nums, k max number of digits in num
// average O(nk)
// worst O(nk) 
// space O(n+k)
/////////////////////////////////////////

// stack
// insertion O(1)
// removal O(1)
// searching O(N)
// access O(N)

// queue
// insertion O(1)
// removal O(1)
// searching O(N)
// access O(N)

/////////////////////////////////////////
// binarySearchTree
// insertion O(logn)
// searching O(logn)

/////////////////////////////////////////
// hashTable
// insertion O(1)
// deletion O(1)
// access O(1)

/////////////////////////////////////////
// hashTable
// insertion O(logn)
// deletion O(logn)
// access O(n)