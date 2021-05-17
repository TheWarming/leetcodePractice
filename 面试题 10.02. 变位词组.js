/* 面试题 10.02. 变位词组
编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。

注意：本题相对原题稍作修改

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
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
  const MAP = new Map()
  strs.forEach(s => {

    //直接让单词排序更加简单
      k = s.split('').sort().join('')
      if(MAP.has(k)){
          MAP.get(k).push(s)
      }else{
          MAP.set(k,[s])
      }
  })
  const ans = []
  for(let v of MAP.values()){
      ans.push(v)
  }
  return ans
};