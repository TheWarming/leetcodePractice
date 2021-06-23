/* 1828. 统计一个圆中点的数目
给你一个数组 points ，其中 points[i] = [xi, yi] ，表示第 i 个点在二维平面上的坐标。多个点可能会有 相同 的坐标。

同时给你一个数组 queries ，其中 queries[j] = [xj, yj, rj] ，表示一个圆心在 (xj, yj) 且半径为 rj 的圆。

对于每一个查询 queries[j] ，计算在第 j 个圆 内 点的数目。如果一个点在圆的 边界上 ，我们同样认为它在圆 内 。

请你返回一个数组 answer ，其中 answer[j]是第 j 个查询的答案。 */
/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
  function inRound(x,y,rx,ry,r){
      return (Math.pow((x-rx),2)+Math.pow((y-ry),2)) <= r*r
  };
  const ans = []
  for(let q of queries){
      let count = 0
      for(let p of points){
          if(inRound(p[0],p[1],q[0],q[1],q[2])){
              count++
          }
      }
      ans.push(count)
  }
  return ans
};