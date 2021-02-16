/* 1033. 移动石子直到连续
三枚石子放置在数轴上，位置分别为 a，b，c。

每一回合，你可以从两端之一拿起一枚石子（位置最大或最小），并将其放入两端之间的任一空闲位置。形式上，假设这三枚石子当前分别位于位置 x, y, z 且 x < y < z。那么就可以从位置 x 或者是位置 z 拿起一枚石子，并将该石子移动到某一整数位置 k 处，其中 x < k < z 且 k != y。

当你无法进行任何移动时，即，这些石子的位置连续时，游戏结束。

要使游戏结束，你可以执行的最小和最大移动次数分别是多少？ 以长度为 2 的数组形式返回答案：answer = [minimum_moves, maximum_moves]

 

示例 1：

输入：a = 1, b = 2, c = 5
输出：[1, 2]
解释：将石子从 5 移动到 4 再移动到 3，或者我们可以直接将石子移动到 3。
示例 2：

输入：a = 4, b = 3, c = 2
输出：[0, 0]
解释：我们无法进行任何移动。 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
  const arr = [a,b,c]
  arr.sort((a,b) => a-b)
  let count = 0;
  if(arr[0] === arr[1] - 1 && arr[1] === arr[2] - 1){
      count = 0
  }else if(arr[0] === arr[1] - 1 || arr[1] === arr[2] - 1){
      count = 1
  }else if(arr[1] - arr[0] === 2 || arr[2] - arr[1] === 2){
      count = 1
  }else{
      count = 2
  }
  return [count,arr[2] - arr[0] - 2]
};