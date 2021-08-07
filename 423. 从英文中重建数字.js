/* 423. 从英文中重建数字
给定一个非空字符串，其中包含字母顺序打乱的英文单词表示的数字0-9。按升序输出原始的数字。

注意:

输入只包含小写英文字母。
输入保证合法并可以转换为原始的数字，这意味着像 "abc" 或 "zerone" 的输入是不允许的。
输入字符串的长度小于 50,000。
示例 1:

输入: "owoztneoer"

输出: "012" (zeroonetwo)
示例 2:

输入: "fviefuro"

输出: "45" (fourfive) */

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  const count = new Array(26).fill(0)
  for(const c of s) {
    count[c.charCodeAt()-97]++;
  }
  console.log(count)
  // building hashmap digit -> its frequency
  const out = new Array(10)
  // letter "z" is present only in "zero"
  out[0] = count['z'.charCodeAt()-97];
  // letter "w" is present only in "two"
  out[2] = count['w'.charCodeAt()-97];
  // letter "u" is present only in "four"
  out[4] = count['u'.charCodeAt()-97];
  // letter "x" is present only in "six"
  out[6] = count['x'.charCodeAt()-97];
  // letter "g" is present only in "eight"
  out[8] = count['g'.charCodeAt()-97];
  // letter "h" is present only in "three" and "eight"
  out[3] = count['h'.charCodeAt()-97] - out[8];
  // letter "f" is present only in "five" and "four"
  out[5] = count['f'.charCodeAt()-97] - out[4];
  // letter "s" is present only in "seven" and "six"
  out[7] = count['s'.charCodeAt()-97] - out[6];
  // letter "i" is present in "nine", "five", "six", and "eight"
  out[9] = count['i'.charCodeAt()-97] - out[5] - out[6] - out[8];
  // letter "n" is present in "one", "nine", and "seven"
  out[1] = count['n'.charCodeAt()-97] - out[7] - 2 * out[9];

  // building output string
  const output = []
  for(let i = 0; i < 10; i++)
    for (let j = 0; j < out[i]; j++)
      output.push(i);
  return output.join('');
};