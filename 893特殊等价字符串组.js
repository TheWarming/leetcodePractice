/* 893. 特殊等价字符串组
你将得到一个字符串数组 A。

每次移动都可以交换 S 的任意两个偶数下标的字符或任意两个奇数下标的字符。

如果经过任意次数的移动，S == T，那么两个字符串 S 和 T 是 特殊等价 的。

例如，S = "zzxy" 和 T = "xyzz" 是一对特殊等价字符串，因为可以先交换 S[0] 和 S[2]，然后交换 S[1] 和 S[3]，使得 "zzxy" -> "xzzy" -> "xyzz" 。

现在规定，A 的 一组特殊等价字符串 就是 A 的一个同时满足下述条件的非空子集：

该组中的每一对字符串都是 特殊等价 的
该组字符串已经涵盖了该类别中的所有特殊等价字符串，容量达到理论上的最大值（也就是说，如果一个字符串不在该组中，那么这个字符串就 不会 与该组内任何字符串特殊等价）
返回 A 中特殊等价字符串组的数量。

 

示例 1：

输入：["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
输出：3
解释：
其中一组为 ["abcd", "cdab", "cbad"]，因为它们是成对的特殊等价字符串，且没有其他字符串与这些字符串特殊等价。
另外两组分别是 ["xyzz", "zzxy"] 和 ["zzyx"]。特别需要注意的是，"zzxy" 不与 "zzyx" 特殊等价。
示例 2：

输入：["abc","acb","bac","bca","cab","cba"]
输出：3
解释：3 组 ["abc","cba"]，["acb","bca"]，["bac","cab"] */

/**
 * @param {string[]} A
 * @return {number}
 */

/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  const seen = new Set();
  A.forEach(s => {
      const count = new Array(52)
      count.fill(0)
      for (let i = 0; i < s.length; i++){
          //隔开26分别记录奇数与偶位数
          count[s.charCodeAt(i) - 97 + 26 * (i % 2)]++;
      }
      //通过合并数组来比较
      seen.add(count.join());
  }) 
  return seen.size;
};


///辣鸡做法
var numSpecialEquivGroups = function(A) {
  const arr = []
  A.forEach(a => {
      arr.push(helper(a))
  })
  let res = 0;
  let length = A.length;
  for(let i = 0; i < length; i++){
      if(arr[i] === -1) continue
      for(let j = i + 1; j < length; j++){
          if(arr[j] === -1) continue
          if(compare(arr[i],arr[j])){
              arr[j] = -1;
          }
      }
      arr[i] = -1;
      res++
  }
  return res

  function helper(s){
      const map1 = new Map();
      const map2 = new Map();
      s.split('').forEach((it,id) => {
          const map = id % 2 === 0 ? map2 : map1
          map.set(it,map.has(it) ? map.get(it) + 1 : 1)
      })
      return [map1,map2]
  }

  function compare(arr1,arr2){
      for(let key of arr1[0].keys()){
          if(arr1[0].get(key) !== arr2[0].get(key)){
              return false
          }
      }
      for(let key of arr1[1].keys()){
          if(arr1[1].get(key) !== arr2[1].get(key)){
              return false
          }
      }
      return true
  }
};
