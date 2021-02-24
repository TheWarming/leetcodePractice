/* 1309. 解码字母到整数映射
给你一个字符串 s，它由数字（'0' - '9'）和 '#' 组成。我们希望按下述规则将 s 映射为一些小写英文字符：

字符（'a' - 'i'）分别用（'1' - '9'）表示。
字符（'j' - 'z'）分别用（'10#' - '26#'）表示。 
返回映射之后形成的新字符串。

题目数据保证映射始终唯一。

 

示例 1：

输入：s = "10#11#12"
输出："jkab"
解释："j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2". */
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const ans = [];
  const map = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  for(let i = s.length - 1; i >= 0 ; i--){
      if(s[i] === '#'){
          ans.unshift(map[parseInt(s[i-2] + s[i-1])]);
          i -= 2
      }else{
          ans.unshift(map[parseInt(s[i])])
      }
  }
  return ans.join('')
};