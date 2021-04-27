/* 64. 最小路径和
给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

 

示例 1：


输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if(grid.length === 1&&grid[0].length ===1) return grid[0][0]
  const ilen = grid.length
  const jlen = grid[0].length

  let dp = new Array(ilen)
  dp = dp.fill(1).map(i => new Array(jlen))
  dp[0][0] = grid[0][0]
  for(let i = 1; i < ilen; i++){
      dp[i][0] = dp[i-1][0] + grid[i][0]
  }
  for(let j = 1; j < jlen; j++){
      dp[0][j] = dp[0][j-1] + grid[0][j]
  }
  for(let i = 1; i < ilen; i++){
      for(let j = 1; j < jlen; j++){
          dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
      }
  }
  return dp[ilen-1][jlen-1]
};