/* 477. 汉明距离总和
两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。

给你一个整数数组 nums，请你计算并返回 nums 中任意两个数之间汉明距离的总和。

 

示例 1：

输入：nums = [4,14,2]
输出：6
解释：在二进制表示中，4 表示为 0100 ，14 表示为 1110 ，2表示为 0010 。（这样表示是为了体现后四位之间关系）
所以答案为：
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/*在计算汉明距离时，我们考虑的是同一比特位上的值是否不同，而不同比特位之间是互不影响的。

对于数组nums 中的某个元素val，若其二进制的第 i 位为 1，我们只需统计 nums 中有多少元素的第 i 位为 0，即计算出了 val 与其他元素在第 i 位上的汉明距离之和。

具体地，若长度为 n 的数组 nums 的所有元素二进制的第 i 位共有 c 个 1，n-c 个 0，则些元素在二进制的第 i 位上的汉明距离之和为c⋅(n−c)*/
var totalHammingDistance = function(nums) {
  let ans = 0, n = nums.length;
  for (let i = 0; i < 30; ++i) {
      let c = 0;
      for (const val of nums) {
          c += (val >> i) & 1;
      }
      ans += c * (n - c);
  }
  return ans;
};