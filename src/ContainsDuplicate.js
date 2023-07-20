// Problem 1
// Given an integer list nums, write a function that solves the following problem; return true if
// any value appears at least twice in the list, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


// SOLUTIONS:

// This solution has a time and space complexity is O(n) where (n) is the length of the array.
function containsDuplicateSet(nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
}

// The time and space complexity is O(n log n) where (n) is the length of the array.
function containsDuplicateSort(nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log('\n///////////////////////////////\n Problem 1: Contains Duplicate \n///////////////////////////////\n');

let nums = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000));

let t1 = performance.now();
const s1 = containsDuplicateSet(nums);
let t2 = performance.now();




console.log(`Solution 1 (Set): ${s1}. Took ${t2 - t1} ms.`);
console.log('This solution uses a Set, the time complexity is O(n) and the space complexity is O(n) where n is the length of the array.\n');

t1 = performance.now();
const s2 = containsDuplicateSort(nums);
t2 = performance.now();

console.log(`Solution 2 (Sort): ${s2}. Took ${t2 - t1} ms.`);
console.log('This solution sorts the array and iterates through it, the time complexity is O(n log n) and the space complexity is O(1).\n');

console.log('On time complexity, the first solution is faster than the second solution for large arrays because O(n) is faster than O(n log n) for large values of n. The second solution is more efficient in space complexity than the first solution because it uses a constant amount of extra space, while the first solution uses an amount of extra space that grows linearly with the size of the array.\n');


module.exports = {
  containsDuplicateSet,
  containsDuplicateSort
}