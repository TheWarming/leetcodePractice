/* 1287. 有序数组中出现次数超过25%的元素
给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。

请你找到并返回这个整数

 

示例：

输入：arr = [1,2,2,6,6,6,6,7,10]
输出：6 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const m = parseInt(arr.length/4)
  const map = new Map()
  for(let i of arr){
      map.set(i,map.has(i)?map.get(i)+1:1);
      if(map.get(i) > m){
          return i
      }
  }
};