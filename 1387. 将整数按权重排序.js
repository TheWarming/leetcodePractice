/* 1387. 将整数按权重排序
我们将整数 x 的 权重 定义为按照下述规则将 x 变成 1 所需要的步数：

如果 x 是偶数，那么 x = x / 2
如果 x 是奇数，那么 x = 3 * x + 1
比方说，x=3 的权重为 7 。因为 3 需要 7 步变成 1 （3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1）。

给你三个整数 lo， hi 和 k 。你的任务是将区间 [lo, hi] 之间的整数按照它们的权重 升序排序 ，如果大于等于 2 个整数有 相同 的权重，那么按照数字自身的数值 升序排序 。

请你返回区间 [lo, hi] 之间的整数按权重排序后的第 k 个数。

注意，题目保证对于任意整数 x （lo <= x <= hi） ，它变成 1 所需要的步数是一个 32 位有符号整数。 */

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
  const map = new Map()
  const arr = []
  for(let i = lo; i <= hi; i++){
      arr.push(i)
  }
  arr.sort((a,b) => {
      return helper(a) - helper(b)
  })

  function helper(n){
    /* 即「先查表，再计算」 */
      if(!map.has(n)){
        /* 「先记忆，再返回」 */
          if(n === 1) {
              map.set(n,0)
          }
          if(n%2 === 0){
              map.set(n,helper(n/2) + 1)
          }else{
              map.set(n,helper(3*n+1) + 1)
          }
      }
      return map.get(n)
  }

  return arr[k-1]
};