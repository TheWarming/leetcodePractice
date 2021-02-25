/* 1351. 统计有序矩阵中的负数
给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 

请你统计并返回 grid 中 负数 的数目。

 

示例 1：

输入：grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
输出：8
解释：矩阵中共有 8 个负数。 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let r = grid.length - 1;
  let c = grid[0].length - 1;
  let count = 0;
  while(0 <= r && 0 <= c && grid[r][c] < 0){
      count++
      let i = r - 1;
      let j = c - 1;
      while(0 <= j && grid[r][j] < 0){
          count++
          j--
      }
      while(0 <= i && grid[i][c] < 0){
          count++
          i--
      }
      r--;
      c--;
  }
  return count
};