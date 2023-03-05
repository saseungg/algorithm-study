//two sum: https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        array.push(i, j);
        return array;
      }
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
