
//  * Problem: Loops 02
//  * Module:  02 - Warm Up
//  * 



function searchElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (arr[i] == element) {
      return i;
    }
  }

  return -1;
}

let count = 0;
function countOfNegativeNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}


function findLargestNumber(array) {
  let ans = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > ans) {
      ans = array[i];
    }
  }
  return ans;
}

function findMinimumNumber(array) {
  let ans = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < ans) {
      ans = array[i];
    }
  }
  return ans;
}

function LargestNumber2nd(array) {
  let fh = -Infinity, sh = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > fh) {
      sh = fh;
      fh = array[i];
    } else if ((array[i] > sh) && (fh != array[i])) {
      sh = array[i];
    }
  }
  console.log("First highest number : " + fh + ", Second highest number :" + sh);
}

let arr = [2, 7, 33, 5, 1, 90, -14, 0, 120, 120];
let ele = 111;

console.log(searchElement(arr, ele));

console.log("\n******************\n");

console.log(countOfNegativeNumbers(arr));

console.log("\n******************\n");

console.log("Largest Number - " + findLargestNumber(arr));

console.log("\n******************\n");

console.log("Minimum Number - " + findMinimumNumber(arr));

console.log("\n******************\n");

LargestNumber2nd(arr);





