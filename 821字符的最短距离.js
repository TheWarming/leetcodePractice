/* 821. 字符的最短距离
给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

 

示例：

输入：S = "loveleetcode", C = 'e'
输出：[3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

提示：

字符串 S 的长度范围为 [1, 10000]。
C 是一个单字符，且保证是字符串 S 里的字符。
S 和 C 中的所有字母均为小写字母。 */
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const arr = [];
  const res = []
  for(let i = 0; i < S.length; i++){
      if(S[i] === C){
          arr.push(i)
      }
  }
  for(let i = 0; i < S.length; i++){
      let min = Number.MAX_SAFE_INTEGER
      for(let j = 0; j < arr.length; j++){
          min = Math.min(min,Math.abs(i - arr[j]))
      }
      res.push(min)
  }
  return res
};

var shortestToChar = function(S, C) {
  const res = [];
  const length = S.length;
  let pre = -Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < length; i++){
    if(S[i] === C) pre = i;
    res[i] = i - pre
  }
  pre = Number.MAX_SAFE_INTEGER;
  for(let i = length - 1; i >= 0; i--){
    if(S[i] === C) pre = i;
    res[i] = Math.min(res[i],pre - i)
  }
  return res
};