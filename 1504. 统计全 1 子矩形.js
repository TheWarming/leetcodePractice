/* 1504. 统计全 1 子矩形
给你一个只包含 0 和 1 的 rows * columns 矩阵 mat ，请你返回有多少个 子矩形 的元素全部都是 1 。

 

示例 1：

输入：mat = [[1,0,1],
            [1,1,0],
            [1,1,0]]
输出：13
解释：
有 6 个 1x1 的矩形。
有 2 个 1x2 的矩形。
有 3 个 2x1 的矩形。
有 1 个 2x2 的矩形。
有 1 个 3x1 的矩形。
矩形数目总共 = 6 + 2 + 3 + 1 + 1 = 13 。 */
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
  const rm = mat.length
  const cm = mat[0].length
  const rows = new Array(rm).fill(0).map(n => new Array(cm))
  for(let i = 0; i < rm; i++){
      for(let j = 0; j < cm; j++){
          if(j === 0){
              rows[i][j] = mat[i][j]
          }else if(mat[i][j] === 0){
              rows[i][j] = 0
          }else{
              rows[i][j] = rows[i][j-1] + 1
          }
      }
  }
  let ans = 0
  for(let i = 0; i < rm; i++){
      for(let j = 0; j < cm; j++){
          let col = rows[i][j]
          for(let k = i; col > 0 && k >= 0; k--){
              col = Math.min(col,rows[k][j])
              ans += col
          }
      }
  }
  return ans
};