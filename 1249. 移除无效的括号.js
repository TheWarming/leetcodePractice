/* 1249. 移除无效的括号
给你一个由 '('、')' 和小写字母组成的字符串 s。

你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。

请返回任意一个合法字符串。

有效「括号字符串」应当符合以下 任意一条 要求：

空字符串或只包含小写字母的字符串
可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」
 

示例 1：

输入：s = "lee(t(c)o)de)"
输出："lee(t(c)o)de"
解释："lee(t(co)de)" , "lee(t(c)ode)" 也是一个可行答案。 */
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  const left = []
  const right = []
  for(let i = 0; i < s.length; i++){
      if(s[i] === '('){
          left.push(i)
      }else if(s[i] ===")"){
          if(left.length){
              left.pop()
          }else{
              right.push(i)
          }
      }
  }
  const ans = s.split('')
  for(const i of left){
      ans[i] = ''
  }
  for(const i of right){
      ans[i] = ''
  }
  return ans.join('')
};