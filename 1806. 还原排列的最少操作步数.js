/* 1806. 还原排列的最少操作步数
给你一个偶数 n​​​​​​ ，已知存在一个长度为 n 的排列 perm ，其中 perm[i] == i​（下标 从 0 开始 计数）。

一步操作中，你将创建一个新数组 arr ，对于每个 i ：

如果 i % 2 == 0 ，那么 arr[i] = perm[i / 2]
如果 i % 2 == 1 ，那么 arr[i] = perm[n / 2 + (i - 1) / 2]
然后将 arr​​ 赋值​​给 perm 。

要想使 perm 回到排列初始值，至少需要执行多少步操作？返回最小的 非零 操作步数。

 

示例 1：

输入：n = 2
输出：1
解释：最初，perm = [0,1]
第 1 步操作后，perm = [0,1]
所以，仅需执行 1 步操作 */
/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function(n) {
  let i = 1,res = 0
  do{
      if(i%2 === 1) i = (i+n-1)/2
      else i = i/2
      res++
  }while(i !== 1)
  return res
};