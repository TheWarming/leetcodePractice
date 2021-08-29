/* 1090. 受标签影响的最大值
我们有一个项的集合，其中第 i 项的值为 values[i]，标签为 labels[i]。

我们从这些项中选出一个子集 S，这样一来：

|S| <= num_wanted
对于任意的标签 L，子集 S 中标签为 L 的项的数目总满足 <= use_limit。
返回子集 S 的最大可能的 和。

 

示例 1：

输入：values = [5,4,3,2,1], labels = [1,1,2,2,3], num_wanted = 3, use_limit = 1
输出：9
解释：选出的子集是第一项，第三项和第五项。 */

/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
  const arr = new Array(values.length)
  for(let i = 0; i < values.length; i++){
      arr[i] = [labels[i],values[i]]
  }
  arr.sort((a,b) => b[1] - a[1])
  let ans = 0
  let count = 0
  const map = new Map()
  for(let i = 0; i < arr.length; i++){
      const n = map.get(arr[i][0]) || 0
      if(n >= useLimit) continue
      ans += arr[i][1]
      count++
      map.set(arr[i][0],n+1)
      if(count >= numWanted){
          return ans
      }
  }
  return ans
};