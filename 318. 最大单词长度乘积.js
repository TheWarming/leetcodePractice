/* 318. 最大单词长度乘积
给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。

示例 1:

输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
输出: 16 
解释: 这两个单词为 "abcw", "xtfn"。
示例 2:

输入: ["a","ab","abc","d","cd","bcd","abcd"]
输出: 4 
解释: 这两个单词为 "ab", "cd"。 */
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  /**
  全是小写字母, 可以用一个32为整数表示一个word中出现的字母, 
  hash[i]存放第i个单词出现过的字母, a对应32位整数的最后一位,
  b对应整数的倒数第二位, 依次类推. 时间复杂度O(N^2)
  判断两两单词按位与的结果, 如果结果为0且长度积大于最大积则更新
  **/

  const n = words.length;
  const hash = new Array(n).fill(0)
  let max = 0;
  for(let i = 0; i < n; ++i) {
      for(const c of words[i])
          hash[i] |= 1 << (c.charCodeAt()-97);
  }
  
  for(let i = 0; i < n-1; ++i) {
      for(let j = i+1; j < n; ++j) {
          if((hash[i] & hash[j]) == 0)
              max = Math.max(words[i].length * words[j].length, max);
      }
  }
  return max;
};