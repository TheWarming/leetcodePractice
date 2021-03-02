/* 1417. 重新格式化字符串
给你一个混合了数字和字母的字符串 s，其中的字母均为小写英文字母。

请你将该字符串重新格式化，使得任意两个相邻字符的类型都不同。也就是说，字母后面应该跟着数字，而数字后面应该跟着字母。

请你返回 重新格式化后 的字符串；如果无法按要求重新格式化，则返回一个 空字符串 。

 

示例 1：

输入：s = "a0b1c2"
输出："0a1b2c"
解释："0a1b2c" 中任意两个相邻字符的类型都不同。 */

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  const SET = new Set(['0','1','2','3','4','5','6','7','8','9'])
  const arr1 = []
  const arr2 = []
  for(let i = 0; i < s.length ; i++){
      if(SET.has(s[i])){
          arr1.push(s[i])
      }else{
          arr2.push(s[i])
      }
  }
  const l1 = arr1.length;
  const l2 = arr2.length
  if(l1 === l2 || l1 + 1 === l2 || l2 + 1 === l1){
      const ans = [];
      let flag = l1 > l2 ? true : false;
      while(ans.length !== s.length){
          if(flag){
              ans.push(arr1.pop())
          }else{
              ans.push(arr2.pop())
          }
          flag = !flag
      }
      return ans.join('')
  }else{
      return ''
  }
};