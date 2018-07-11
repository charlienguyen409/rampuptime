//Implement a binary search algorithm 
var array = [1,2,3,4,5,6,7,8,9,10,11];
var target = 4;
var low = 0;
var high = array.length -1;
var mid;
var guess;

function BinarySearch(){
  mid = Math.floor((low+high)/2);
  guess = array[mid];
  if(low > high){
    return -1;
  }
  else if(guess == target){
    return mid;
  }
  else if(guess < target){
    low = mid + 1;
    return BinarySearch();
  }
  else if(guess > target){
    high = mid - 1;
    return BinarySearch();
  }
}

var result = BinarySearch();
console.log(result);

