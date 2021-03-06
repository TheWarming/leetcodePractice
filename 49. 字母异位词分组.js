/* 49. 字母异位词分组
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
] */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map()
  strs.forEach(n => {
      s = n.split('').sort().join('')
      map.has(s) ? map.get(s).push(n ):map.set(s,[n]) 
  })

  return [...map.values()]
};