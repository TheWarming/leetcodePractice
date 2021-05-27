/* 695. 岛屿的最大面积
给定一个包含了一些 0 和 1 的非空二维数组 grid 。

一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)

 

示例 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let ans = 0;
  const ilen = grid.length
  const jlen = grid[0].length
  const dir = [[-1,0],[1,0],[0,-1],[0,1]]
  grid.forEach((g,i) => {
      g.forEach((n,j) => {
          if(n === 1){
              ans = Math.max(ans,dfs(i,j))
          }
      })
  })
  return ans

  function dfs(i,j){
      if(i < 0 || i >= ilen || j < 0 || j >= jlen || grid[i][j] === 0){
          return 0
      }
      grid[i][j] = 0
      let count = 1
      for(let k = 0; k <= 3; k++){
          count += dfs(i+dir[k][0],j+dir[k][1])
      }
      return count
  }
};