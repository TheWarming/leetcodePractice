/* 1232. 缀点成线
在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，其中 coordinates[i] = [x, y] 表示横坐标为 x、纵坐标为 y 的点。

请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，否则请返回 false。

 

示例 1：



输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
输出：true */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  function getK(po1,po2){
      if(po2[0] - po1[0] === 0) return 'no'
      return (po2[1] - po1[1]) / (po2[0] - po1[0])
  }
  for(let i = 2; i < coordinates.length; i++){
      if(getK(coordinates[i],coordinates[0]) !== getK(coordinates[i-1],coordinates[0])){
          return false
      }
  }
  return true
};