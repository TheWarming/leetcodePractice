/* 892. 三维形体的表面积
给你一个 n * n 的网格 grid ，上面放置着一些 1 x 1 x 1 的正方体。

每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

放置好正方体后，任何直接相邻的正方体都会互相粘在一起，形成一些不规则的三维形体。

请你返回最终这些形体的总表面积。

注意：每个形体的底面也需要计入表面积中。 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  iLength = grid.length;
  jLength = grid[0].length

  const helper = function(i,j,v){
      if(i < 0 || j < 0 || i >= iLength || j >= jLength || grid[i][j] === 0){
          return v
      }
      if(grid[i][j] !== -1 && grid[i][j] < v){
          return  v - grid[i][j]
      }


      let c = 0;
      for(let k = 0; k <= 3; k++){
          const x = i + dx[k];
          const y = j + dy[k];
          c += find(x,y,v);
      }
      return c
  }

  function find(i,j,v){
      if(i < 0 || j < 0 || i >= iLength || j >= jLength || grid[i][j] === 0){
          return v
      }
      if(grid[i][j] < v){
          return  v - grid[i][j]
      }
      return 0
  }

  let res = 0;
  grid.forEach((g,i) => {
      g.forEach((v,j) => {
          if(v > 0) {
              res += helper(i,j,v) + 2
          }
      })
  })

  return res
};