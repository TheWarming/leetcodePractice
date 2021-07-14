/* 539. 最小时间差
给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

 

示例 1：

输入：timePoints = ["23:59","00:00"]
输出：1 */
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let ans = Number.MAX_SAFE_INTEGER
  timePoints = timePoints.map(n => {
      n = n.split(':').map(Number)
      return n[0]*60 + n[1]
  })
  timePoints.sort((a,b) => a-b)
  for(let i = 1; i < timePoints.length; i++){
      ans = Math.min(ans,timePoints[i]-timePoints[i-1])
  }
  return Math.min(ans,60*24- (timePoints[timePoints.length-1]-timePoints[0]))
};