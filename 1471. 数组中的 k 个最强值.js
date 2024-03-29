/* 1471. 数组中的 k 个最强值
给你一个整数数组 arr 和一个整数 k 。

设 m 为数组的中位数，只要满足下述两个前提之一，就可以判定 arr[i] 的值比 arr[j] 的值更强：

 |arr[i] - m| > |arr[j] - m|
 |arr[i] - m| == |arr[j] - m|，且 arr[i] > arr[j]
请返回由数组中最强的 k 个值组成的列表。答案可以以 任意顺序 返回。

中位数 是一个有序整数列表中处于中间位置的值。形式上，如果列表的长度为 n ，那么中位数就是该有序列表（下标从 0 开始）中位于 ((n - 1) / 2) 的元素。

例如 arr = [6, -3, 7, 2, 11]，n = 5：数组排序后得到 arr = [-3, 2, 6, 7, 11] ，数组的中间位置为 m = ((5 - 1) / 2) = 2 ，中位数 arr[m] 的值为 6 。
例如 arr = [-7, 22, 17, 3]，n = 4：数组排序后得到 arr = [-7, 3, 17, 22] ，数组的中间位置为 m = ((4 - 1) / 2) = 1 ，中位数 arr[m] 的值为 3 。
 

示例 1：

输入：arr = [1,2,3,4,5], k = 2
输出：[5,1]
解释：中位数为 3，按从强到弱顺序排序后，数组变为 [5,1,4,2,3]。最强的两个元素是 [5, 1]。[1, 5] 也是正确答案。
注意，尽管 |5 - 3| == |1 - 3| ，但是 5 比 1 更强，因为 5 > 1 。 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
  arr.sort((a,b) => a-b)
  const mid = parseInt(((arr.length-1)/2))
  const m = arr[mid]

  arr.sort((a,b) => {
      const c1 = Math.abs(a-m)
      const c2 = Math.abs(b-m)
      return c1 === c2 ? b-a : c2 - c1
  })
  return arr.splice(0,k)
};

var getStrongest = function(arr, k) {
  arr.sort((a,b) => a-b)
  const mid = parseInt(((arr.length-1)/2))
  const m = arr[mid]
  let l = 0
  let r = arr.length-1
  const ans = []
  while(ans.length < k){
      const a = Math.abs(arr[l] - m)
      const b = Math.abs(arr[r] - m)
      if(a <= b){
          ans.push(arr[r--])
      }else{
          ans.push(arr[l++])
      }
  }
  return ans
};