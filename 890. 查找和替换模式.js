/* 890. 查找和替换模式
你有一个单词列表 words 和一个模式  pattern，你想知道 words 中的哪些单词与模式匹配。

如果存在字母的排列 p ，使得将模式中的每个字母 x 替换为 p(x) 之后，我们就得到了所需的单词，那么单词与模式是匹配的。

（回想一下，字母的排列是从字母到字母的双射：每个字母映射到另一个字母，没有两个字母映射到同一个字母。）

返回 words 中与给定模式匹配的单词列表。

你可以按任何顺序返回答案。 */

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  const ans = []
  words.forEach(w => {
      const map = new Map();
      const set = new Set();
      if(w.length !== pattern.length) return
      for(let i = 0; i < pattern.length; i++){
          if(map.has(pattern[i])){
              if(map.get(pattern[i]) !== w[i]) return
          }else{
              if(set.has(w[i])) return
              set.add(w[i])
              map.set(pattern[i],w[i])
          }
      }
      ans.push(w)
  })
  return ans
};