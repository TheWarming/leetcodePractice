/* 1160. 拼写单词
给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

注意：每次拼写（指拼写词汇表中的一个单词）时，chars 中的每个字母都只能用一次。

返回词汇表 words 中你掌握的所有单词的 长度之和。

 

示例 1：

输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6
解释： 
可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
示例 2： */
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let res = 0;
  const map = new Map()
  chars.split('').forEach(c => {
      map.set(c,map.has(c)?map.get(c)+1:1)
  })
  words.forEach(w => {
      let flag = true;
      const m = new Map()
      for(let i = 0; i < w.length; i++){
          const c = w[i];
          m.set(c,m.has(c)?m.get(c)+1:1);
          if(!map.has(c) || m.get(c) > map.get(c)){
              flag = false
              break
          }
      }
      if(flag){
          res += w.length
      }
  })
  return res
};