/* 1189. “气球” 的最大数量
给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。

字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。

 

示例 1：



输入：text = "nlaebolko"
输出：1
示例 2：



输入：text = "loonbalxballpoon"
输出：2
示例 3：

输入：text = "leetcode"
输出：0 */
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const map = new Map([['b',0],['a',0],['l',0],['o',0],['n',0]])
  let ans = Number.MAX_SAFE_INTEGER
  for(let i = 0; i < text.length; i++){
      if(map.has(text[i])){
          if(text[i] === 'l' || text[i] === 'o'){
              map.set(text[i],map.get(text[i]) + 0.5)
          }else{
              map.set(text[i],map.get(text[i]) + 1)
          }
      }
  }
  for(let value of map.values()){
      ans = Math.min(ans,parseInt(value))
  }
  return ans
};