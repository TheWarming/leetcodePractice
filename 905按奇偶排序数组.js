/* 905. 按奇偶排序数组
给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

你可以返回满足此条件的任何数组作为答案。

 

示例：

输入：[3,1,2,4]
输出：[2,4,3,1]
输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const res = []
  A.forEach(a => {
      a%2 === 0 ? res.unshift(a) : res.push(a)  
  })
  return res
};


//双指针且原地交换
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let i = 0;
  let j = A.length - 1;
  while(i < j){
      if(A[i]%2 > A[j]%2){
          [A[i],A[j]] =  [A[j],A[i]]
      }
      A[i]%2 === 0 && i++
      A[j]%2 === 1 && j--
  }
  return A
};