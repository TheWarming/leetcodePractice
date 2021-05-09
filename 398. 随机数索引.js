/* 398. 随机数索引
给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。

注意：
数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试。

示例:

int[] nums = new int[] {1,2,3,3,3};
Solution solution = new Solution(nums);

// pick(3) 应该返回索引 2,3 或者 4。每个索引的返回概率应该相等。
solution.pick(3);

// pick(1) 应该返回 0。因为只有nums[0]等于1。
solution.pick(1); */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.map = new Map()
  nums.forEach((n,i) => {
      if(this.map.has(n)){
          this.map.get(n).push(i)
      }else{
          this.map.set(n,[i])
      }
  })
};

/** 
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function(target) {
  if(!this.map.has(target)) return -1
  const arr = this.map.get(target)
  const i = parseInt(Math.random() * arr.length)
  return arr[i]
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.pick(target)
*/


/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/** 
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function(target) {
  let count = 0;
  let idx = -1
  for(let i = 0; i < this.nums.length; i++){
      if(this.nums[i] === target){
          count++

          //只需要保证第I个的概率是1/i
          //为什么不是直接return？为什么能保证一定有结果？  因为第1个的概率就是1
          if(Math.floor(Math.random() * count) === 0){
              idx = i
          }
      }
  }
  return idx
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.pick(target)
*/