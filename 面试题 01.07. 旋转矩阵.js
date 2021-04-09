/* 面试题 01.07. 旋转矩阵
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？

 

示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
] */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
  const len = matrix.length

  //左上-右下对角线翻转
  for(let i = 0; i < len; i++){
      for(let j = i+1; j < len;j++){
          [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
      }
  }
  //中间水平翻转
  const m = parseInt(len/2)
  for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < m; j++){
          [matrix[i][j],matrix[i][len-j-1]] = [matrix[i][len-j-1],matrix[i][j]]
      }
  }
};




var rotate = function(matrix) {
  let ans = new Array(matrix.length)
  let ind = matrix.length - 1;
  ans = ans.fill(-1).map((n,i) => [...matrix[i]])
  ans.forEach(m => {
      m.forEach((n,j) => {
          matrix[j][ind] = n
      })
      ind--
  })
};