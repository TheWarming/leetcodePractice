/* 1190. 反转每对括号间的子串
给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

 

示例 1：

输入：s = "(abcd)"
输出："dcba" */

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const stk = []
  let str = ''
  for(let ch of s){
      if(ch === '('){
          stk.push(str)
          str = ''
      }else if(ch === ')'){
          str = str.split('').reverse().join('')
          str = stk.pop() + str
      }else{
          str += ch
      }
  }
  return str
};


/* 第一步我们向右移动到左括号，此时我们跳跃到该左括号对应的右括号（进入了更深一层）；
第二到第三步我们在括号内部向左移动（完成了更深层的遍历）；
第四步我们向左移动到左括号，此时我们跳跃到该左括号对应的右括号（返回到上一层）；
第五步我们在括号外向右移动（继续遍历）

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/solution/fan-zhuan-mei-dui-gua-hao-jian-de-zi-chu-gwpv/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const n = s.length;
  const pair = new Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < n; i++) {
      if (s[i] === '(') {
          stack.push(i);
      } else if (s[i] == ')') {
          const j = stack.pop();
          pair[i] = j;
          pair[j] = i;
      }
  }

  const sb = [];
  let index = 0, step = 1;
  while (index < n) {
      if (s[index] === '(' || s[index] === ')') {
          index = pair[index];
          step = -step;
      } else {
          sb.push(s[index]);
      }
      index += step;
  }
  return sb.join('');
};
