/* 1002. 查找常用字符

给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。

 

示例 1：

输入：["bella","label","roller"]
输出：["e","l","l"]
示例 2：

输入：["cool","lock","cook"]
输出：["c","o"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-common-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  const minfreq = new Array(26)
  minfreq.fill(Number.MAX_SAFE_INTEGER);
  A.forEach(word => {
      const freq = new Array(26);
      freq.fill(0)
      const length = word.length;
      for (let i = 0; i < length; ++i) {
          ++freq[word[i].charCodeAt() - 97];
      }
      for (let i = 0; i < 26; ++i) {
          minfreq[i] = Math.min(minfreq[i], freq[i]);
      }
  })
  const ans = []
  for (let i = 0; i < 26; ++i) {
      for (let j = 0; j < minfreq[i]; ++j) {
          ans.push(String.fromCharCode(i + 97));
      }
  }
  return ans
};