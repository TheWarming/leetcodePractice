/* 1905. 统计子岛屿
给你两个 m x n 的二进制矩阵 grid1 和 grid2 ，它们只包含 0 （表示水域）和 1 （表示陆地）。一个 岛屿 是由 四个方向 （水平或者竖直）上相邻的 1 组成的区域。任何矩阵以外的区域都视为水域。

如果 grid2 的一个岛屿，被 grid1 的一个岛屿 完全 包含，也就是说 grid2 中该岛屿的每一个格子都被 grid1 中同一个岛屿完全包含，那么我们称 grid2 中的这个岛屿为 子岛屿 。

请你返回 grid2 中 子岛屿 的 数目 。

 

示例 1：


输入：grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
输出：3
解释：如上图所示，左边为 grid1 ，右边为 grid2 。
grid2 中标红的 1 区域是子岛屿，总共有 3 个子岛屿。 */

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
  const ilen = grid2.length
  const jlen = grid2[0].length
  let flag = true
  let ans = 0
  for(let i = 0; i < ilen; i++){
      for(let j = 0; j < jlen; j++){
          if(grid2[i][j]){
              flag = true
              bfs(i,j)
              flag  && ans++
          } 
      }
  }
  return ans
  function bfs(i,j){
      if(i < 0 || i >= ilen || j < 0 || j >= jlen || grid2[i][j] === 0){
          return
      }
      grid2[i][j] = 0
      if(grid1[i][j] !== 1 && flag){
          flag = false
      }
      bfs(i-1,j)
      bfs(i+1,j)
      bfs(i,j-1)
      bfs(i,j+1)
  }
};