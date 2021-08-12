/* 1423. 可获得的最大点数
几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。

每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。

你的点数就是你拿到手中的所有卡牌的点数之和。

给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。

 

示例 1：

输入：cardPoints = [1,2,3,4,5,6,1], k = 3
输出：12
解释：第一次行动，不管拿哪张牌，你的点数总是 1 。但是，先拿最右边的卡牌将会最大化你的可获得点数。最优策略是拿右边的三张牌，最终点数为 1 + 6 + 5 = 12 。 */

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  //滑动窗口的大小，题目转化为让窗口内和最小
  const size = cardPoints.length - k
  let sum = 0
  //总的和
  let total = 0
  for(let i = 0; i < size; i++){
      //初始窗口的数值
      sum += cardPoints[i]
  }
  let min = sum
  for(let i = 0; i < cardPoints.length - size; i++){
      total += cardPoints[i]
      sum = sum - cardPoints[i] + cardPoints[size+i]
      //寻找窗口最小的数值
      min = Math.min(sum,min)
  }
  for(let i = cardPoints.length - size; i < cardPoints.length; i++){
      total += cardPoints[i]
  }
  return total-min
};