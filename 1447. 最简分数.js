/* 1447. 最简分数
给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。

 

示例 1：

输入：n = 2
输出：["1/2"]
解释："1/2" 是唯一一个分母小于等于 2 的最简分数。
示例 2：

输入：n = 3
输出：["1/2","1/3","2/3"]
示例 3：

输入：n = 4
输出：["1/2","1/3","1/4","2/3","3/4"]
解释："2/4" 不是最简分数，因为它可以化简为 "1/2" 。
示例 4：

输入：n = 1
输出：[] */

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  const ans = []
  while(n !== 1){
      for(let i = 1; i < n; i++){
          if(helper(i,n) === 1){
              ans.push(i +'/' + n)
          }
      }
      n--
  }
  return ans

  function helper(a,b){
      if(a === 1 || b === 1) return 1
      if(a === b) return a
      if(a>b){
          a = a - b
      }else{
          b = b - a
      }
      return helper(a,b)
  }
};

//求公约数
function gcd(a,b){
  return b === 0 ? a : gcd(b,a%b)
}