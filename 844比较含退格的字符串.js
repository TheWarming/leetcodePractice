/* 844. 比较含退格的字符串
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

 

示例 1：

输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
示例 2：

输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
示例 3：

输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
示例 4：

输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  const helper = function(str){
      const res = [];
      str.split('').forEach(c => {
          c === '#' ? res.pop() : res.push(c)
      })
      return res.join('')
  }
  return helper(S) === helper(T)
};


/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

 //从后面开始遍历
var backspaceCompare = function(S, T) {
  let i = S.length - 1;
  let j = T.length - 1;
  let skipS = 0;
  let skipT = 0;
  while(i >= 0 || j >= 0){
      while(i >= 0){
          if(S[i] === '#'){
              skipS++
              i--
          }else if(skipS > 0){
              skipS--
              i--
          }else{
              break
          }
      }

      while(j >= 0){
          if(T[j] === '#'){
              skipT++
              j--
          }else if(skipT > 0){
              skipT--
              j--
          }else{
              break
          }
      }

      if(i >= 0 && j >= 0){
          if(S[i] !== T[j]) return false
      }else if(i >= 0 || j >= 0){
          return false
      }

      i--;
      j--;
  }
  return true
};