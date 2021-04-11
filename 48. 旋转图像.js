/* 48. 旋转图像
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

  */

  /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length
  for(let i = 0; i < len; i++){
      for(let j = i+1; j < len; j++){
          [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
      }
  }
  const mid = parseInt(len/2)
  for(let i = 0; i < len; i++){
      for(let j = 0; j < mid; j++){
          [matrix[i][j],matrix[i][len-1-j]] = [matrix[i][len-1-j],matrix[i][j]]
      }
  }
};