/* 1314. 矩阵区域和
给你一个 m * n 的矩阵 mat 和一个整数 K ，请你返回一个矩阵 answer ，其中每个 answer[i][j] 是所有满足下述条件的元素 mat[r][c] 的和： 

i - K <= r <= i + K, j - K <= c <= j + K 
(r, c) 在矩阵内。
 

示例 1：

输入：mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
输出：[[12,21,16],[27,45,33],[24,39,28]] */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  let ans = new Array(mat.length);
  ans = ans.fill(-1).map(n => {
      const arr = new Array(mat[0].length)
      arr.fill(0)
      return arr 
  });

  for(let i = 0; i < mat.length; i++){
      for(let j = 0; j < mat[0].length; j++){
          helper(i,j)
      }
  }
  return ans

  function helper(i,j){
      const istart = i - k < 0 ? 0 : i-k;
      const iend = i + k >= mat.length ? mat.length - 1 : i + k;
      const jstart = j - k < 0 ? 0 : j-k;
      const jend = j + k >= mat[0].length ? mat[0].length - 1 : j + k;  
      for(let c = istart; c <= iend; c++){
          for(let r = jstart; r <= jend; r++){
              ans[i][j] += mat[c][r]
          }
      }     
  }
};