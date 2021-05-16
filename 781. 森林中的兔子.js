/* 781. 森林中的兔子
森林中，每个兔子都有颜色。其中一些兔子（可能是全部）告诉你还有多少其他的兔子和自己有相同的颜色。我们将这些回答放在 answers 数组里。

返回森林中兔子的最少数量。

示例:
输入: answers = [1, 1, 2]
输出: 5
解释:
两只回答了 "1" 的兔子可能有相同的颜色，设为红色。
之后回答了 "2" 的兔子不会是红色，否则他们的回答会相互矛盾。
设回答了 "2" 的兔子为蓝色。
此外，森林中还应有另外 2 只蓝色兔子的回答没有包含在数组中。
因此森林中兔子的最少数量是 5: 3 只回答的和 2 只没有回答的。

输入: answers = [10, 10, 10]
输出: 11

输入: answers = []
输出: 0 */

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  const MAP = new Map()
  answers.forEach(n => {
      MAP.set(n,MAP.has(n)? MAP.get(n)+1:1)
  })
  let sum = 0;
  for(let k of MAP.keys()){
      const v = MAP.get(k)
      if(k === 0){
          sum += v
      }else if(v <= k + 1){
          sum += k+1
      }else{
          const n = parseInt(v/(k+1))*(k+1)
          sum += n + (v-n > 0 ? k+1 : 0)
      }
  }
  return sum
};

var numRabbits = function(answers) {
  const count = new Map();
  for (const y of answers) {
      count.set(y, (count.get(y) || 0) + 1);
  }
  let ans = 0;
  for (const [y, x] of count.entries()) {
      ans += Math.floor((x + y) / (y + 1)) * (y + 1);
  }
  return ans;
};

var numRabbits = function(answers) {
  let m = new Array(1000);
  let result = 0;
  for (let i of answers) {
// 有相同的记录, 当作是同一颜色
      if (m[i] > 0) {
          m[i]--;
      } else {
// 没有相同的记录, 新建颜色记录,并将这一波个数一并加到result
          m[i] = i;
          result += i + 1;
      }
  }
  return result;
};