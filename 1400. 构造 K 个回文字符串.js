/* 1400. 构造 K 个回文字符串
给你一个字符串 s 和一个整数 k 。请你用 s 字符串中 所有字符 构造 k 个非空 回文串 。

如果你可以用 s 中所有字符构造 k 个回文字符串，那么请你返回 True ，否则返回 False 。

 

示例 1：

输入：s = "annabelle", k = 2
输出：true
解释：可以用 s 中所有字符构造 2 个回文字符串。
一些可行的构造方案包括："anna" + "elble"，"anbna" + "elle"，"anellena" + "b" */
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
  if(s.length < k) return false
  const map = new Map()
  for(let c of s){
      map.set(c,map.has(c) ? map.get(c)+1:1)
  }
  let count = 0
  /* 奇数次的字母, 要组成回文串, 必须单独放在中间 */
  /* 因此奇数次的个数要小于k*/
  for(let v of map.values()){
      if(v%2 === 1){
          count++
      }
  }
  return count > k ? false : true
};