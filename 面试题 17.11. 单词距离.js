/* 面试题 17.11. 单词距离
有个内含单词的超大文本文件，给定任意两个单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?

示例：

输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
输出：1 */

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
  let ans = Number.MAX_SAFE_INTEGER
  let pos1 = -1;
  let pos2 = -1;
  words.forEach((w,i) => {
      if(w === word1){
          pos1 = i
          if(pos2 !== -1){
              ans = Math.min(ans,pos1 - pos2)
          }
      }
      if(w === word2){
          pos2 = i
          if(pos1 !== -1){
              ans = Math.min(ans,pos2 - pos1)
          }
      }
  })


  return ans
};