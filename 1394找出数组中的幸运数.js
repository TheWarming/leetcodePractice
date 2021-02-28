/* 1394. 找出数组中的幸运数
在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。

给你一个整数数组 arr，请你从中找出并返回一个幸运数。

如果数组中存在多个幸运数，只需返回 最大 的那个。
如果数组中不含幸运数，则返回 -1 。
 

示例 1：

输入：arr = [2,2,3,4]
输出：2
解释：数组中唯一的幸运数是 2 ，因为数值 2 的出现频次也是 2 。 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const map = new Map;
  arr.forEach(n => {
      map.set(n,map.has(n)?map.get(n)+1:1)
  })
  let ans = -1
  for(let key of map.keys()){
      if(map.get(key) === key){
          ans = Math.max(ans,key)
      }
  }
  return ans
};