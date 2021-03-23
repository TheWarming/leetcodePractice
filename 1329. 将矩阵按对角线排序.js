/* 1329. 将矩阵按对角线排序
矩阵对角线 是一条从矩阵最上面行或者最左侧列中的某个元素开始的对角线，沿右下方向一直到矩阵末尾的元素。例如，矩阵 mat 有 6 行 3 列，从 mat[2][0] 开始的 矩阵对角线 将会经过 mat[2][0]、mat[3][1] 和 mat[4][2] 。

给你一个 m * n 的整数矩阵 mat ，请你将同一条 矩阵对角线 上的元素按升序排序后，返回排好序的矩阵。

 

示例 1：



输入：mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
输出：[[1,1,1,1],[1,2,2,2],[1,2,3,3]] */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  const mr = mat.length;
  const mc = mat[0].length;
  const m = Math.min(mr,mc) - 1
  for(let i = 0; i < m; i++){
      for(let r = 0; r < mr -1; r++){
          for(let c = 0; c < mc - 1; c++){
              if(mat[r][c] > mat[r+1][c+1]){
                  [mat[r][c],mat[r+1][c+1]] = [mat[r+1][c+1],mat[r][c]]
              }
          }
      }
  }
  return mat
};