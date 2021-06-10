/* 面试题 16.19. 水域大小
你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。

示例：

输入：
[
  [0,2,1,0],
  [0,1,0,1],
  [1,1,0,1],
  [0,1,0,1]
]
输出： [1,2,4]
提示：

0 < len(land) <= 1000
0 < len(land[i]) <= 1000 */

/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {
  const ans = []
  const dir = [[]]
  const ilen = land.length
  const jlen = land[0].length
  for(let i = 0; i < ilen; i++){
      for(let j = 0; j < jlen; j++){
          if(land[i][j] === 0){
              ans.push(getS(i,j))
          }
      }
  }
  ans.sort((a,b) => a-b)
  return ans 

  function getS(i,j){
      if(i < 0 || j < 0 || i >= ilen || j >= jlen || land[i][j] !== 0) return 0
      land[i][j] = -1
      let count = 1
      count += getS(i+1,j)
      count += getS(i-1,j)
      count += getS(i,j+1)
      count += getS(i,j-1)
      count += getS(i+1,j+1)
      count += getS(i-1,j-1)
      count += getS(i+1,j-1)
      count += getS(i-1,j+1)
      return count
  }
};