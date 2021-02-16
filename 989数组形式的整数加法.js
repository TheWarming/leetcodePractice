/* 989. 数组形式的整数加法
对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

 

示例 1：

输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
示例 2：

输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455
示例 3：

输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let c = 0;
  const res = [];
  let i = A.length - 1;
  while(K > 0 || c){
      const k = K % 10
      K = parseInt(K/10)
      const sum = (A[i] ? A[i] : 0) + k + c;
      i--;
      res.unshift(sum % 10)
      c = parseInt(sum/10)
  }
  return i < 0 ? res : [...A.slice(0,i+1),...res]
};

var addToArrayForm = function(A, K) {
  const res = [];
  const n = A.length;
  for (let i = n - 1; i >= 0 || K > 0; --i, K = Math.floor(K / 10)) {
      if (i >= 0) {
        //组关键的一步
          K += A[i];
      }
      res.unshift(K % 10);
  }
  return res;
};