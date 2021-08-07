/* 17. 电话号码的字母组合
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



 

示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"] */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits.length === 0) return []
  const map = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
  let ans = ['']
  for(let i = 0; i < digits.length; i++){
      const temp = [...ans]
      ans = []
      for(let j = 0; j < map[digits[i]].length;j++){
          ans.push(...temp.map(n => n + map[digits[i]][j]))
      }
  }
  return ans
};