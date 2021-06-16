/* 1899. 合并若干三元组以形成目标三元组
三元组 是一个由三个整数组成的数组。给你一个二维整数数组 triplets ，其中 triplets[i] = [ai, bi, ci] 表示第 i 个 三元组 。同时，给你一个整数数组 target = [x, y, z] ，表示你想要得到的 三元组 。

为了得到 target ，你需要对 triplets 执行下面的操作 任意次（可能 零 次）：

选出两个下标（下标 从 0 开始 计数）i 和 j（i != j），并 更新 triplets[j] 为 [max(ai, aj), max(bi, bj), max(ci, cj)] 。
例如，triplets[i] = [2, 5, 3] 且 triplets[j] = [1, 7, 5]，triplets[j] 将会更新为 [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5] 。
如果通过以上操作我们可以使得目标 三元组 target 成为 triplets 的一个 元素 ，则返回 true ；否则，返回 false 。

 

示例 1：

输入：triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]
输出：true
解释：执行下述操作：
- 选择第一个和最后一个三元组 [[2,5,3],[1,8,4],[1,7,5]] 。更新最后一个三元组为 [max(2,1), max(5,7), max(3,5)] = [2,7,5] 。triplets = [[2,5,3],[1,8,4],[2,7,5]]
目标三元组 [2,7,5] 现在是 triplets 的一个元素。 */

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
  const ans = [false,false,false]
  for(let i = 0; i < triplets.length; i++){
      const flag = [0,0,0] 
      for(let j = 0; j < target.length; j++){
          if(triplets[i][j] === target[j]){
              flag[j] = 1
          }else if(triplets[i][j] > target[j]){
              flag[0] = -1
              break
          }
      }
      for(let j = 0; j < flag.length; j++){
          if(flag[j] === -1){
              break
          }else if(flag[j] === 1){
              ans[j] = true
          }
      }
  }
  return ans.every(n => n)
};