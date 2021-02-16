/* 883. 三维形体投影面积
在 N * N 的网格中，我们放置了一些与 x，y，z 三轴对齐的 1 * 1 * 1 立方体。

每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。

现在，我们查看这些立方体在 xy、yz 和 zx 平面上的投影。

投影就像影子，将三维形体映射到一个二维平面上。

在这里，从顶部、前面和侧面看立方体时，我们会看到“影子”。

返回所有三个投影的总面积。

 

示例 1：

输入：[[2]]
输出：5
示例 2：

输入：[[1,2],[3,4]]
输出：17
解释：
这里有该形体在三个轴对齐平面上的三个投影(“阴影部分”)。 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  let z = 0;
  let x = 0;
  let y = 0;
  const arry = new Array(grid.length).fill(0);
  grid.forEach(g => {
      x += Math.max(...g);
      g.forEach((it,id) => {
          arry[id] = Math.max(arry[id],it)
          if(it !== 0) z++
      })
  })
  y = arry.reduce((pre,i) => pre + i,0)
  return y + x  + z
};

var projectionArea = function(grid) {
  const N = grid.length;
  let ans = 0;
  grid.forEach((g,i) => {
      let x = 0;
      let y = 0;
      let z = 0;
      g.forEach((it,j) => {
          if(it !== 0) z++;
          x = Math.max(it,x);
          y = Math.max(y,grid[j][i])
      })
      ans += x + y + z
  })
  return ans;
};