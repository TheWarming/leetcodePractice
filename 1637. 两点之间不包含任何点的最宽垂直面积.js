/* 1637. 两点之间不包含任何点的最宽垂直面积
给你 n 个二维平面上的点 points ，其中 points[i] = [xi, yi] ，请你返回两点之间内部不包含任何点的 最宽垂直面积 的宽度。

垂直面积 的定义是固定宽度，而 y 轴上无限延伸的一块区域（也就是高度为无穷大）。 最宽垂直面积 为宽度最大的一个垂直面积。

请注意，垂直区域 边上 的点 不在 区域内。 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
  points.sort((a,b) => a[0]-b[0])
  let ans = 0;
  for(let i = 1; i < points.length; i++){
      ans = Math.max(points[i][0] - points[i-1][0], ans)
  }
  return ans
};