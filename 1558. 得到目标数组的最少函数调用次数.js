/* 1558. 得到目标数组的最少函数调用次数


给你一个与 nums 大小相同且初始值全为 0 的数组 arr ，请你调用以上函数得到整数数组 nums 。

请你返回将 arr 变成 nums 的最少函数调用次数。

答案保证在 32 位有符号整数以内。 */
/**
 * @param {number[]} nums
 * @return {number}
 */

/* 反过来，求解nums变为全零所需的最小步数 */
var minOperations = function(nums) {
  nums.sort((a,b) => b-a)
  const len = nums.length
  let ans = 0
  while(nums[0] !== 0){
      for(let i = 0; i < len; i++){
          if(nums[i]%2 === 1 ){
              nums[i]--
              ans++
          }
      }
      for(let i = 0; i < len; i++){
          nums[i] /= 2
      }

      ///最后一次循环,cnt会多算一次,待会要减掉
      //因为只能是减一为0  减一为0后不需要除以2
      ans++
  }
  return ans === 0 ? 0 : ans-1
};