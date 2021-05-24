/* 1525. 字符串的好分割数目
给你一个字符串 s ，一个分割被称为 「好分割」 当它满足：将 s 分割成 2 个字符串 p 和 q ，它们连接起来等于 s 且 p 和 q 中不同字符的数目相同。

请你返回 s 中好分割的数目。

 

示例 1：

输入：s = "aacaba"
输出：2
解释：总共有 5 种分割字符串 "aacaba" 的方法，其中 2 种是好分割。
("a", "acaba") 左边字符串和右边字符串分别包含 1 个和 3 个不同的字符。
("aa", "caba") 左边字符串和右边字符串分别包含 1 个和 3 个不同的字符。
("aac", "aba") 左边字符串和右边字符串分别包含 2 个和 2 个不同的字符。这是一个好分割。
("aaca", "ba") 左边字符串和右边字符串分别包含 2 个和 2 个不同的字符。这是一个好分割。
("aacab", "a") 左边字符串和右边字符串分别包含 3 个和 1 个不同的字符。 */
/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
  let ans = 0
  const map = new Map()
  const set = new Set()

  for(let i = 0; i < s.length; i++){
      map.set(s[i],(map.get(s[i])||0)+ 1)
  }
  
  for(let i = 0; i < s.length - 1; i++){
      const v = map.get(s[i])
      if(v-1 === 0){
          map.delete(s[i])
      }else{
          map.set(s[i],v-1)
      }
      set.add(s[i])
      if(set.size === map.size){
          ans++
      }
  }
  return ans
};