/* 1049. 最后一块石头的重量 II
有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。

每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

如果 x == y，那么两块石头都会被完全粉碎；
如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。

 

示例 1：

输入：stones = [2,7,4,1,8,1]
输出：1
解释：
组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。 */
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  //转换成01背包问题，求两堆石头的最小差值。由于石头总和为sum.则问题转换成了
  //背包最多装sum / 2的石头,stones数组里有一大堆石头。求如何装能装下最多重量石头。
  const sum = stones.reduce((pre,n) => pre + n)
  const half = parseInt(sum / 2)
  const dp = new Array(half + 1).fill(0)
  for (let i = 0; i < stones.length; ++i)
  {
      for (let j = half; j >= stones[i]; --j)
      {
          dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
      }
  }
  return sum - 2 * dp[half];
};