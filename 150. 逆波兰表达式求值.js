/* 150. 逆波兰表达式求值
根据 逆波兰表示法，求表达式的值。

有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

 

说明：

整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 

示例 1：

输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = []
  for(const t of tokens){
      if(!isNaN(t)){
          stack.push(parseInt(t))
      }else{
          const a = stack.pop()
          const b = stack.pop()
          let c = 0
          switch(t){
              case '+':
                  c = b + a
              break
              case '-':
                  c = b - a
              break
              case '*':
                  c = b * a
              break
              case '/':
                  c = parseInt(b/a)
              break
          }
          stack.push(c)
      }
  }
  return stack.pop()
};