/* 1170. 比较字符串最小字母出现频次
定义一个函数 f(s)，统计 s  中（按字典序比较）最小字母的出现频次 ，其中 s 是一个非空字符串。

例如，若 s = "dcce"，那么 f(s) = 2，因为字典序最小字母是 "c"，它出现了 2 次。

现在，给你两个字符串数组待查表 queries 和词汇表 words 。对于每次查询 queries[i] ，需统计 words 中满足 f(queries[i]) < f(W) 的 词的数目 ，W 表示词汇表 words 中的每个词。

请你返回一个整数数组 answer 作为答案，其中每个 answer[i] 是第 i 次查询的结果。

 

示例 1：

输入：queries = ["cbd"], words = ["zaaaz"]
输出：[1] */

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  const counts = []
  const ans = []
  words.forEach(w => {
      counts.push(getCount(w))
  })
  counts.sort((a,b) => a-b)
  const clen =  counts.length
  queries.forEach(n => {
      /*let num = 0
      for(let m of counts){
          if(m > getCount(n)) num++
          else break
      }*/
      let left = 0, right = clen-1
      const num = getCount(n)
      while(left < right){
          const mid = parseInt((right-left)/2) + left
          if(counts[mid] > num){
              right = mid - 1
          }else{
              left = mid + 1 
          }
      }
      ans.push(clen - left - (counts[left] > num ? 0:1))
  })
  return ans
  function getCount(w){
      w = w.split('').sort()
      let count = 1;
      for(let i = 1; i < w.length; i++){
          if(w[i] === w[i-1]){
              count++
          }else{
              break
          }
      }
      return count
  }
};