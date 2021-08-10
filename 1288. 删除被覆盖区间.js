/* 1288. 删除被覆盖区间
给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。

只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。

在完成所有删除操作后，请你返回列表中剩余区间的数目。

 

示例：

输入：intervals = [[1,4],[3,6],[2,8]]
输出：2
解释：区间 [3,6] 被区间 [2,8] 覆盖，所以它被删除了。 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  let ans = 0
  for(let i = 0; i < intervals.length; i++){
      if(intervals[i] === -1) continue
      for(let j = i + 1 ; j < intervals.length; j++){
          if(intervals[j] === -1) continue
          if(intervals[i][0] <= intervals[j][0] && intervals[i][1] >= intervals[j][1]){
              intervals[j] = -1
              ans++
          }else if(intervals[j][0] <= intervals[i][0] && intervals[j][1] >= intervals[i][1]){
              ans++
              break
          }
      }
  }
  return intervals.length-ans
};

var removeCoveredIntervals = function(intervals) {
  //对起点进行升序排序，如果起点相同，则对终点进行降序排序
  intervals.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])

  let count = 0;
  let end, prev_end = 0;
  for (const curr of intervals) {
    end = curr[1];
/*     迭代排序后的区间并且比较终点大小。
    如果当前区间不被前一个区间覆盖 end > prev_end，则增加 count，指定当前区间为下一步的前一个区间。
    否则，当前区间被前一个区间覆盖，不做任何事情 */
    if (end > prev_end) {
      ++count;
      prev_end = end;
    }
  }
  return count;
}
