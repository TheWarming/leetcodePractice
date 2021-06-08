/* 1267. 统计参与通信的服务器
这里有一幅服务器分布图，服务器的位置标识在 m * n 的整数矩阵网格 grid 中，1 表示单元格上有服务器，0 表示没有。

如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。

请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。

 

示例 1：



输入：grid = [[1,0],[0,1]]
输出：0
解释：没有一台服务器能与其他服务器进行通信。 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  const ilen = grid.length
  const jlen = grid[0].length
  const xcount = new Array(ilen).fill(0)
  const ycount = new Array(jlen).fill(0)
  
  for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
          if(grid[i][j] === 1){
              xcount[i]++
              ycount[j]++
          }
      }
  }

  let ans = 0
  for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
          if(grid[i][j] === 1 && (xcount[i] > 1 || ycount[j] > 1)){
              ans++
          }
      }
  }
  return ans
};