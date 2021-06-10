/* 447. 回旋镖的数量
给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

返回平面上所有回旋镖的数量。

 
示例 1：

输入：points = [[0,0],[1,0],[2,0]]
输出：2
解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
示例 2：

输入：points = [[1,1],[2,2],[3,3]]
输出：2 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let result = 0
  for(const [x1,y1] of points){
      const map = new Map()
      for(const [x2,y2] of points){
          if(x1===x2 && y1===y2) continue
          const d = getDir(x1,y1,x2,y2)
          map.set(d,map.has(d)?map.get(d)+1:1)
      }
      for(let count of map.values()){
          if (count >= 2) { // 距离为0和1时，结果都是0，所以大于等于2即可
              result += count * (count - 1); // 计算排列组合个数 n * (n - 1)       
          }
      }
  }
  return result
  function getDir(x1,y1,x2,y2){
      return Math.pow(x1-x2,2) + Math.pow(y1-y2,2)
  }
};