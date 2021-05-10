/* 986. 区间列表的交集
给定两个由一些 闭区间 组成的列表，firstList 和 secondList ，其中 firstList[i] = [starti, endi] 而 secondList[j] = [startj, endj] 。每个区间列表都是成对 不相交 的，并且 已经排序 。

返回这 两个区间列表的交集 。

形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b 。

两个闭区间的 交集 是一组实数，要么为空集，要么为闭区间。例如，[1, 3] 和 [2, 4] 的交集为 [2, 3] 。 */

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  const ans = []
  let i = 0;
  let j = 0;
  while(i < firstList.length && j < secondList.length){
      const l = Math.max(firstList[i][0],secondList[j][0]) 
      const r = Math.min(firstList[i][1],secondList[j][1]) 
      if(l <= r){
          ans.push([l,r])
      }
      firstList[i][1] > secondList[j][1] ? j++ : i++
  }
  return ans
};