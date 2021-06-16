/* 347. 前 K 个高频元素
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

 

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1] */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const occurrences = new Map()
  for (let num of nums) {
      occurrences.set(num,occurrences.has(num)?occurrences.get(num)+1:1)
  }
  console.log(occurrences)

  // int[] 的第一个元素代表数组的值，第二个元素代表了该值出现的次数
  const queue = []
  for (let key of occurrences.keys()) {
      const count = occurrences.get(key)
      if (queue.length === k) {
          if (queue[0][1] < count) {
              queue.shift();
              queue.push([key,count]);
              queue.sort((a,b) => a[1] - b[1])
          }
      } else {
          queue.push([key,count]);
          queue.sort((a,b) => a[1] - b[1])
      }
  }
  return queue.map(n => n[0])
};