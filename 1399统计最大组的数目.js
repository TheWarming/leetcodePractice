/* 1399. 统计最大组的数目
给你一个整数 n 。请你先求出从 1 到 n 的每个整数 10 进制表示下的数位和（每一位上的数字相加），然后把数位和相等的数字放到同一个组中。

请你统计每个组中的数字数目，并返回数字数目并列最多的组有多少个。

 

示例 1：

输入：n = 13
输出：4
解释：总共有 9 个组，将 1 到 13 按数位求和后这些组分别是：
[1,10]，[2,11]，[3,12]，[4,13]，[5]，[6]，[7]，[8]，[9]。总共有 4 个组拥有的数字并列最多。 */
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  const MAP = new Map()
  let max = -1;
  while(n >= 1){
      let count = 0;
      let i = n;
      do{
          count += i%10
          i = parseInt(i/10)
      }while(i > 0)
      MAP.set(count,MAP.has(count)?MAP.get(count)+1:1);
      max = Math.max(max,MAP.get(count))
      n--
  }
  let ans = 0
  for(let value of MAP.values()){
      if(value === max){
          ans++
      }
  }
  return ans
};