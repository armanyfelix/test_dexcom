// Problem 2
// Given a sorted list of distinct integers and a target value, write a function that solves the
// following problem; return the index if the target is found. If not, return the index where it
// would be if it were inserted in order.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4


// SOLUTIONS:

// The time complexity is O(log n) where n is the length of the input list and the space complexity is O(1).
function binarySearchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let center = Math.floor((left + right) / 2);
    if (nums[center] == target) {
      return center;
    } else if (nums[center] < target) {
      left = center + 1;
    } else {
      right = center - 1;
    }
  }
  return left;
  }

// The time complexity of O(n) where n is the length of the unput list and the space complexity is O(1).
function linearSearchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

console.log('\n///////////////////////////////////\n Problem 2: Search Insert Position \n///////////////////////////////////\n');

const nums = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000));
const target = Math.random() * 1000;

let t1 = performance.now();
const s1 = binarySearchInsert(nums, target);
let t2 = performance.now();

console.log(`Solution 1 (Binary): ${s1}. Took ${t2 - t1} ms.`);
console.log('This solution uses binary search, the time complexity is O(log n) and the space complexity is O(1).\n');


t1 = performance.now();
const s2 = linearSearchInsert(nums, target);
t2 = performance.now();

console.log(`Solution 2 (Linear): ${s2}. Took ${t2 - t1} ms.`);
console.log('This solution uses a linear search, the time complexity is O(n) and the space complexity is O(1) where n is the length of the array.\n');

console.log('On time complexity, the binary search solution is faster than the linear search solution for large arrays because O(log n) is faster than O(n) for large values of n. Both solutions have the same space complexity of O(1) because they use a constant amount of extra space.\n');



module.exports = {
  binarySearchInsert,
  linearSearchInsert,
}