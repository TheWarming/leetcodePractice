/* 1414. 和为 K 的最少斐波那契数字数目
给你数字 k ，请你返回和为 k 的斐波那契数字的最少数目，其中，每个斐波那契数字都可以被使用多次。

斐波那契数字定义为：

F1 = 1
F2 = 1
Fn = Fn-1 + Fn-2 ， 其中 n > 2 。
数据保证对于给定的 k ，一定能找到可行解。

 

示例 1：

输入：k = 7
输出：2 
解释：斐波那契数字为：1，1，2，3，5，8，13，……
对于 k = 7 ，我们可以得到 2 + 5 = 7 。 */

/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
  let a = 1, b = 1
  const arr = [a,b]
  while(a+b <= k){
      const c = a+b
      arr.push(c)
      a = b
      b = c
  }
  let ans = 0
  for(let i = arr.length-1; i >= 0 ; i--){
      if(arr[i] <= k){
          k -= arr[i]
          ans++
      }
  }
  return ans
};