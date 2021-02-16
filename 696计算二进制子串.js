/* 696. 计数二进制子串
给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数。

示例 1 :

输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

请注意，一些重复出现的子串要计算它们出现的次数。

另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
示例 2 :

输入: "10101"
输出: 4
解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let count = 0;
  for(let i = 1; i < s.length; i++){
      if(s[i] != s[i - 1]){
          count++;
          let left = i - 2;
          let right = i + 1
          while(left>= 0 && right < s.length && s[left] === s[i-1] && s[right] === s[i]){
              count++;
              left--;
              right++
          }
      }
  }
  return count
}

var countBinarySubstrings = function(s) {
  let last = 0;
  let res = 0;
  let i = 0;
  while(i < s.length){
      let count = 0;
      let char = s[i];
      while(s[i] === char){
          count++;
          i++
      }
      res += Math.min(last,count);
      last = count;
  }
  return res
}
/* 我们可以将字符串 ss 按照 00 和 11 的连续段分组，存在 \rm countscounts 数组中，例如 s = 00111011s=00111011，可以得到这样的 \rm countscounts 数组：{\rm counts} = \{2, 3, 1, 2\}counts={2,3,1,2}。

这里 \rm countscounts 数组中两个相邻的数一定代表的是两种不同的字符。假设 \rm countscounts 数组中两个相邻的数字为 uu 或者 vv，它们对应着 uu 个 00 和 vv 个 11，或者 uu 个 11 和 vv 个 00。它们能组成的满足条件的子串数目为 \min \{ u, v \}min{u,v}，即一对相邻的数字对答案的贡献。

我们只要遍历所有相邻的数对，求它们的贡献总和，即可得到答案

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/count-binary-substrings/solution/ji-shu-er-jin-zhi-zi-chuan-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */