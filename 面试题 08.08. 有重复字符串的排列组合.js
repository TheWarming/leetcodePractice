/* 面试题 08.08. 有重复字符串的排列组合
有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。

示例1:

 输入：S = "qqe"
 输出：["eqq","qeq","qqe"] */

 /**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
  const temp = [];
  const ans = [];
  const arr = S.split('')
  arr.sort()
  S = arr.join('')
  helper(S)
  function helper(s){
      if(temp.length === S.length){
          ans.push(temp.join(''))
          return
      }
      for(let i = 0; i < s.length; i++){
          if(s[i] === s[i-1]) continue
          temp.push(s[i])
          const arr = s.split('')
          arr[i] = ''
          helper(arr.join(''))
          temp.pop()
      }
  }

  return ans
};