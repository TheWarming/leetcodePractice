/* 413. 等差数列划分
如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。

例如，以下数列为等差数列:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
以下数列不是等差数列。

1, 1, 2, 5, 7 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  if(nums.length < 3) return 0
  let pre = nums[1] - nums[0]
  let count = 2;
  let ans = 0;
  for(let i = 2; i < nums.length; i++){
      const n = nums[i] - nums[i-1]
      if(n === pre){
          count++
      }else{
          helper(count)
          pre = n
          count = 2
      }
  }
  helper(count)
  return ans

  function helper(count){
      if(count >= 3){
          let i = count - 2
          ans += i*(i+1)/2
      }
  }
};