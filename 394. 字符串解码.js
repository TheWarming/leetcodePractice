/* 394. 字符串解码
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc" */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = []
  for(let i = 0; i < s.length; i++){
      const c = s[i]
      if(c === ']'){
          let str = ''
          while(stack[stack.length-1] !== '['){
              //需要重复的字符串
              str = stack.pop() + str
          }
          //'['出栈
          stack.pop()
          //n为需要重复的次数
          const n = stack.pop()
          for(let i = 0; i < n; i++){
              stack.push(str)
          }
      }else if(!isNaN(s[i])){
          //数字直接整合为一个数字后再进栈
          let sn = c
          while(!isNaN(s[i+1])){
              i++
              sn = sn + s[i]
          }
          stack.push(parseInt(sn))
      }else{
          //'['或者字母直接进栈
          stack.push(c)
      }
  }
  return stack.join('')
};