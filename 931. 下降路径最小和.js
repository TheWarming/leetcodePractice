/* 931. 下降路径最小和
给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。

下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。

 

示例 1：

输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
输出：13
解释：下面是两条和最小的下降路径，用加粗标注：
[[2,1,3],      [[2,1,3],
 [6,5,4],       [6,5,4],
 [7,8,9]]       [7,8,9]] */

 /**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  if(matrix.length === 1) return matrix[0].reduce((pre,n) => Math.min(pre,n),Number.MAX_SAFE_INTEGER)
  let arr = new Array(matrix.length)
  arr = arr.fill(0).map(i => new Array(matrix[0].length))
  const jlen = matrix[0].length
  const ilen = matrix.length
  for(let i = 0; i < jlen; i++){
      arr[0][i] = matrix[0][i]
  }

  let flag = false
  let ans = Number.MAX_SAFE_INTEGER
  for(let i = 1; i < ilen; i++){
      if(i === ilen - 1){
          flag = true
      }
      for(let j = 0; j < matrix.length; j++){
          arr[i][j] = Math.min(arr[i-1][j],j-1 >= 0 ?arr[i-1][j-1] : Number.MAX_SAFE_INTEGER,j + 1 < jlen?arr[i-1][j+1] : Number.MAX_SAFE_INTEGER) +matrix[i][j]
          if(flag){
              ans = Math.min(arr[i][j],ans)
          }
      }

  }
  return ans
};