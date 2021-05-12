/* 1338. 数组大小减半
给你一个整数数组 arr。你可以从中选出一个整数集合，并删除这些整数在数组中的每次出现。

返回 至少 能删除数组中的一半整数的整数集合的最小大小。

 

示例 1：

输入：arr = [3,3,3,3,5,5,5,2,2,7]
输出：2
解释：选择 {3,7} 使得结果数组为 [5,5,5,2,2]、长度为 5（原数组长度的一半）。
大小为 2 的可行集合有 {3,5},{3,2},{5,2}。
选择 {2,7} 是不可行的，它的结果数组为 [3,3,3,3,5,5,5]，新数组长度大于原数组的二分之一。 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  const MAP = new Map()
  arr.forEach(n => {
      MAP.set(n,MAP.has(n)? MAP.get(n)+1:1)
  })

  const ar = [...MAP]
  const len = arr.length
  ar.sort((a,b) => b[1] - a[1])
  let count = 0
  let ans = 0
  for(let n of ar){
      count += n[1]
      ans++
      if(count*2 >= len){
          break
      }
  }
  return ans
};