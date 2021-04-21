/* 537. 复数乘法
给定两个表示复数的字符串。

返回表示它们乘积的字符串。注意，根据定义 i2 = -1 。

示例 1:

输入: "1+1i", "1+1i"
输出: "0+2i"
解释: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  let [a1,a2] = a.split('+')
  a1 = parseInt(a1)
  a2 = parseInt(a2.substr(0,a2.length-1))
  let [b1,b2] = b.split('+')
  b1 = parseInt(b1)
  b2 = parseInt(b2.substr(0,b2.length-1))


  let s1 = a1*b1 - a2*b2
  let s2 = a2*b1 + a1*b2
  return s1 + '+' + s2 + 'i'
};