/* 1415. 长度为 n 的开心字符串中字典序第 k 小的字符串
一个 「开心字符串」定义为：

仅包含小写字母 ['a', 'b', 'c'].
对所有在 1 到 s.length - 1 之间的 i ，满足 s[i] != s[i + 1] （字符串的下标从 1 开始）。
比方说，字符串 "abc"，"ac"，"b" 和 "abcbabcbcb" 都是开心字符串，但是 "aa"，"baa" 和 "ababbc" 都不是开心字符串。

给你两个整数 n 和 k ，你需要将长度为 n 的所有开心字符串按字典序排序。

请你返回排序后的第 k 个开心字符串，如果长度为 n 的开心字符串少于 k 个，那么请你返回 空字符串 。

 

示例 1：

输入：n = 1, k = 3
输出："c"
解释：列表 ["a", "b", "c"] 包含了所有长度为 1 的开心字符串。按照字典序排序后第三个字符串为 "c" 。 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
  const arr = ['a','b','c']
  const temp = []
  let ans = ''
  function helper(ind){
      if(k <= 0) return
      if(temp.length === n){
          k--
          if(k === 0){
              ans = temp.join('')
          }
          return
      }
      arr.forEach((n,i) => {
          if(i === ind) return
          temp.push(n)
          helper(i)
          temp.pop()
      })
  }
  helper(-1)
  return ans
};