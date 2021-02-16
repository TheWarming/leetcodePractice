/* 859. 亲密字符串
给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。 */
/* 
交换字母的定义是取两个下标 i 和 j （下标从 0 开始），只要 i!=j 就交换 A[i] 和 A[j] 处的字符。例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。

 

示例 1：

输入： A = "ab", B = "ba"
输出： true
解释： 你可以交换 A[0] = 'a' 和 A[1] = 'b' 生成 "ba"，此时 A 和 B 相等。
示例 2：

输入： A = "ab", B = "ab"
输出： false
解释： 你只能交换 A[0] = 'a' 和 A[1] = 'b' 生成 "ba"，此时 A 和 B 不相等。
示例 3:

输入： A = "aa", B = "aa"
输出： true
解释： 你可以交换 A[0] = 'a' 和 A[1] = 'a' 生成 "aa"，此时 A 和 B 相等。
示例 4：

输入： A = "aaaaaaabc", B = "aaaaaaacb"
输出： true
示例 5：

输入： A = "", B = "aa"
输出： false */
 

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if(A.length !== B.length) return false
  let first = -1;
  let second = -1;
  const set = new Set()
  let flag = false;
  for(let i = 0; i < A.length; i++){
      if(A[i] !== B[i]){
          if(first === -1){
              first = i
          }else if(second === -1){
              second = i
          }else{
              return false
          }
      }else if(!set.has(A[i])){
          set.add(A[i])
      }else if(!flag){   
          flag = true;
      }
  }
  //可以分为两种情况来做
  return first !== -1 && second !== -1 && A[first] === B[second] && A[second] === B[first] || A === B && flag === true
};