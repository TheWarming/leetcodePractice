/* 59. 螺旋矩阵 II
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 

示例 1：


输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]] */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const ans = new Array(n).fill(0).map(i => new Array(n).fill(0));
  let curnum = 1; //当前值
  const maxnum = n*n;  //最大值
  let row = 0;  // 当前行
  let col = 0;  // 当前列
  let curdir = 0; // 当前方向
  const dir = [[0,1],[1,0],[0,-1],[-1,0]] //方向
  while(curnum <= maxnum){
      ans[row][col] = curnum;
      curnum++
      const nextrow = row + dir[curdir][0]
      const nextcol = col + dir[curdir][1]
      /**判断是否转向*/
      if(nextrow < 0 || nextrow >= n || nextcol < 0 || nextcol >= n || ans[nextrow][nextcol] !== 0){
          curdir = (curdir + 1) % 4
      }
      row = row + dir[curdir][0];
      col = col + dir[curdir][1]
  }
  return ans
};