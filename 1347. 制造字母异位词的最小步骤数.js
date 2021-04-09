/* 1347. 制造字母异位词的最小步骤数
给你两个长度相等的字符串 s 和 t。每一个步骤中，你可以选择将 t 中的 任一字符 替换为 另一个字符。

返回使 t 成为 s 的字母异位词的最小步骤数。

字母异位词 指字母相同，但排列不同（也可能相同）的字符串。

 

示例 1：

输出：s = "bab", t = "aba"
输出：1
提示：用 'b' 替换 t 中的第一个 'a'，t = "bba" 是 s 的一个字母异位词。 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const map = new Map()
  for(let i = 0; i < s.length; i++){
      map.set(s[i],map.has(s[i])?map.get(s[i])+1:1)
      map.set(t[i],map.has(t[i])?map.get(t[i])-1:-1)
  }
  let ans = 0
  for(let v of map.values()){
      if(v > 0) ans += v
  }
  return  ans
};