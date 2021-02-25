/* 1346. 检查整数及其两倍数是否存在
给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。

更正式地，检查是否存在两个下标 i 和 j 满足：

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

示例 1：

输入：arr = [10,2,5,3]
输出：true
解释：N = 10 是 M = 5 的两倍，即 10 = 2 * 5 。 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  const SET = new Set(arr)
  for(let a of arr){
      if(a === 0){
          if(arr.indexOf(0) !== arr.lastIndexOf(0)){
              return true
          }
      }else if(SET.has(2*a)){
          return true
      }
  }
  return false
};