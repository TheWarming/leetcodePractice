/* 1037. 有效的回旋镖
回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。

给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。

 

示例 1：

输入：[[1,1],[2,3],[3,2]]
输出：true
示例 2：

输入：[[1,1],[2,2],[3,3]]
输出：false */

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  if(points[0][0] === points[1][0] && points[0][1] === points[1][1]) return false
  if(points[0][0] === points[2][0] && points[0][1] === points[2][1]) return false
  if(points[1][0] === points[2][0] && points[1][1] === points[2][1]) return false
  function helper(po1,po2){
      if(po1[1] === po2[1]) return 'no'
      return (po2[0]-po1[0])/(po2[1]-po1[1])
  }
  return helper(points[0],points[1]) !== helper(points[0],points[2])
};