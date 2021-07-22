/* 1016. 子串能表示从 1 到 N 数字的二进制串
给定一个二进制字符串 S（一个仅由若干 '0' 和 '1' 构成的字符串）和一个正整数 N，如果对于从 1 到 N 的每个整数 X，其二进制表示都是 S 的子串，就返回 true，否则返回 false。

 

示例 1：

输入：S = "0110", N = 3
输出：true */
/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
  const m = (n>>1)+1;
  /*照例先分析一波。 显然1到N的二进制表示有将近一半是冗余的。
   举例，对于N=9，依次为1，10，11，100，101，110，111，1000，1001。
   可以看到k位长的后端包含了k-1位长的。因为3位长的是完整的，4位长的只有部分，
   所以实际只用考虑所有3位长和4位长的。
   也就是对于N，只用找pow(2,(int)(log(N+1)/log(2))-1)到N的。 */
  for(let i=m;i<=n;i++){
      const b = i.toString(2)
      if(s.indexOf(b) === -1){
          return false;
      }
  }
  return true;
};