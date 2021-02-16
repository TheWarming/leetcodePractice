/* 给定两个整数 L 和 R ，找到闭区间 [L, R] 范围内，计算置位位数为质数的整数个数。

（注意，计算置位代表二进制表示中1的个数。例如 21 的二进制表示 10101 有 3 个计算置位。还有，1 不是质数。）

示例 1:

输入: L = 6, R = 10
输出: 4
解释:
6 -> 110 (2 个计算置位，2 是质数)
7 -> 111 (3 个计算置位，3 是质数)
9 -> 1001 (2 个计算置位，2 是质数)
10-> 1010 (2 个计算置位，2 是质数)
示例 2:

输入: L = 10, R = 15
输出: 5
解释:
10 -> 1010 (2 个计算置位, 2 是质数)
11 -> 1011 (3 个计算置位, 3 是质数)
12 -> 1100 (2 个计算置位, 2 是质数)
13 -> 1101 (3 个计算置位, 3 是质数)
14 -> 1110 (3 个计算置位, 3 是质数)
15 -> 1111 (4 个计算置位, 4 不是质数)
注意:

L, R 是 L <= R 且在 [1, 10^6] 中的整数。
R - L 的最大值为 10000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  let res = 0;
  for(let i = L ; i <= R ; i++){
      let n = i.toString(2).split('').reduce((pre,item) => {
          if(item === '1'){
              return ++pre
          }else{
              return pre
          }
      },0)
      if(n === 1 || n === 0) continue
      let flag = true;
      for(let j = 2; j <= parseInt(Math.sqrt(n));j++){
          if(n % j === 0){
              flag = false
              break
          }
      }
      if(flag){
          res++
      }
  }
  return res
};
/* 
算法：

从 L 到 R，我们首先计算该数字转换为二进制有多少个 1。如果数量是 2, 3, 5, 7, 11, 13, 17, 19，则我们增加计数。最高是 19 的原因是 R \leq 10^6 < 2^{20}R≤10 
6
 <2 
20
 。
 */
/* PythonJava

class Solution {
    public int countPrimeSetBits(int L, int R) {
        int ans = 0;
        for (int x = L; x <= R; ++x)
            if (isSmallPrime(Integer.bitCount(x)))
                ans++;
        return ans;
    }
    public boolean isSmallPrime(int x) {
        return (x == 2 || x == 3 || x == 5 || x == 7 ||
                x == 11 || x == 13 || x == 17 || x == 19);
    }
}
复杂度分析

时间复杂度：O(D)O(D)，其中 D = R-LD=R−L，指的是所需判断数字的个数。
空间复杂度：O(1)O(1)。

作者：LeetCode
链接：https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/solution/er-jin-zhi-biao-shi-zhong-zhi-shu-ge-ji-suan-zhi-2/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */