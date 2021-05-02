/* 120. 三角形最小路径和
给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const ans = new Array(triangle.length).fill(0).map((n,i) => new Array(i+1))
  ans[0][0] = triangle[0][0];
  const ilen = triangle.length
  for(let i = 1; i < ilen; i++){
      ans[i][0] = ans[i-1][0] + triangle[i][0]
      ans[i][i] = ans[i-1][i-1] + triangle[i][i]
  }
  for(let i = 2; i < ilen; i++){
      for(let j = 1; j < i; j++){
          ans[i][j] = Math.min(ans[i-1][j],ans[i-1][j-1]) + triangle[i][j]
      }
  }
  return ans[ilen-1].reduce((pre,i) => Math.min(pre,i),Number.MAX_SAFE_INTEGER)
};

//原地修改，自下而上
var minimumTotal = function(triangle) {
  for(let i = triangle.length - 2; i >= 0; i--){
    for(let j = 0; j <= i; j++){
      triangle[i][j] += Math.min(triangle[i+1][j],triangle[i+1][j+1])
    }
  }
  return triangle[0][0]
};