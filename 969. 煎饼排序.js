/* 969. 煎饼排序
给你一个整数数组 arr ，请使用 煎饼翻转 完成对数组的排序。

一次煎饼翻转的执行过程如下：

选择一个整数 k ，1 <= k <= arr.length
反转子数组 arr[0...k-1]（下标从 0 开始）
例如，arr = [3,2,1,4] ，选择 k = 3 进行一次煎饼翻转，反转子数组 [3,2,1] ，得到 arr = [1,2,3,4] 。

以数组形式返回能使 arr 有序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * arr.length 范围内的有效答案都将被判断为正确。

 

示例 1：

输入：[3,2,4,1]
输出：[4,2,4,3]
解释：
我们执行 4 次煎饼翻转，k 值分别为 4，2，4，和 3。
初始状态 arr = [3, 2, 4, 1]
第一次翻转后（k = 4）：arr = [1, 4, 2, 3]
第二次翻转后（k = 2）：arr = [4, 1, 2, 3]
第三次翻转后（k = 4）：arr = [3, 2, 1, 4]
第四次翻转后（k = 3）：arr = [1, 2, 3, 4]，此时已完成排序。  */

/* 思路: 这道题,要想到如何通过翻转把列表最大数依次往列表底移动.

例如:[3,2,4,1]---->[?,?,?,4]

我们可以先找到数字4的位置,将数字4前进行翻转变成[4,2,3,1],接下来我们在整体翻转[1,3,2,4],这样我们把数字4移动列表底.

然后,我们[1,3,2,4]--->[?,?,3,4],还是用刚才方法,首先找到数字3,翻转数字3前面的,再翻转已经排好数字(这里指数字4)前就可以了.

依次类推... */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  let n = arr.length
  const res = []
  while(n > 1){
      const idx = arr.indexOf(n)
      if(idx === n-1){
          n--
          continue
      }
      reverse(idx)
      res.push(idx+1)
      reverse(n-1)
      res.push(n)
      n--
  }
  return res

  function reverse(n){
      let right = n
      let left = 0
      while(left < right){
          const temp = arr[left]
          arr[left++] = arr[right]
          arr[right--] = temp
      }
  }
};