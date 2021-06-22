/* 1254. 统计封闭岛屿的数目
有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。

我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。

如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。

请返回封闭岛屿的数目。

 

示例 1：



输入：grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
输出：2
解释：
灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  let ans = 0
  const ilen = grid.length;
  const jlen = grid[0].length
  for(let i = 0; i < ilen; i++){
      for(let j = 0; j < jlen; j++){
          if(grid[i][j] === 0){
              const obj = {val:1}
              dfs(i,j,obj)
              ans += obj.val
          }
      }
  }
  return ans
  function dfs(i,j,obj){      
      if(i < 0 || i >= ilen || j < 0 || j >= jlen){
          obj.val = 0
          return
      }
      if(grid[i][j] === 1 || grid[i][j] === -1) return
      grid[i][j] = -1
      dfs(i+1,j,obj)
      dfs(i-1,j,obj)
      dfs(i,j+1,obj)
      dfs(i,j-1,obj)
  }
};