/* 1310. 子数组异或查询
有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。

对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。

并返回一个包含给定查询 queries 所有结果的数组。

 

示例 1：

输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
输出：[2,7,14,8] 
解释：
数组中元素的二进制表示形式是：
1 = 0001 
3 = 0011 
4 = 0100 
8 = 1000 
查询的 XOR 值为：
[0,1] = 1 xor 3 = 2 
[1,2] = 3 xor 4 = 7 
[0,3] = 1 xor 3 xor 4 xor 8 = 14 
[3,3] = 8 */

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  const ans = []
  for(const [i1,i2] of queries){
      let n = 0
      for(let i = i1;i <= i2; i++){
          n ^= arr[i]
      }
      ans.push(n)
  }
  return ans
};

var xorQueries = function(arr, queries) {
  const n = arr.length;
  const xors = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
      xors[i + 1] = xors[i] ^ arr[i];
  }
  const m = queries.length;
  const ans = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
      ans[i] = xors[queries[i][0]] ^ xors[queries[i][1] + 1];
  }
  return ans;
};
