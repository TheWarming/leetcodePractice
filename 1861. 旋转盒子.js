/* 1861. 旋转盒子
给你一个 m x n 的字符矩阵 box ，它表示一个箱子的侧视图。箱子的每一个格子可能为：

'#' 表示石头
'*' 表示固定的障碍物
'.' 表示空位置
这个箱子被 顺时针旋转 90 度 ，由于重力原因，部分石头的位置会发生改变。每个石头会垂直掉落，直到它遇到障碍物，另一个石头或者箱子的底部。重力 不会 影响障碍物的位置，同时箱子旋转不会产生惯性 ，也就是说石头的水平位置不会发生改变。

题目保证初始时 box 中的石头要么在一个障碍物上，要么在另一个石头上，要么在箱子的底部。

请你返回一个 n x m的矩阵，表示按照上述旋转后，箱子内的结果。

 

示例 1：



输入：box = [["#",".","#"]]
输出：[["."],
      ["#"],
      ["#"]] */

      /**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
  const len1 = box.length
  const len2 = box[0].length
  const ans = new Array(len2).fill(-1).map(i => new Array(len1).fill('.'))
  for(let i = len1-1; i >= 0 ;i--){
      let current = len2-1
      for(let j = len2-1; j >=0 ; j--){
          if(box[i][j] === '#'){
              ans[current--][len1-1-i] = '#'
          }else if(box[i][j] === '*'){
              ans[j][len1-1-i] = '*'
              current = j-1
          }
      }
  }
  return ans
};