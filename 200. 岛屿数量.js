/* 200. 岛屿数量
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const imax = grid.length
    const jmax = grid[0].length
    let ans = 0
    for(let i = 0; i < imax; i++){
        for(let j = 0; j < jmax; j++){
            if(grid[i][j] === '1'){
                helper(i,j)
                ans++
            }
        }
    }
    return ans
    function helper(i,j){
        if(i < 0 || i >= imax || j < 0 || j >= jmax || grid[i][j] === '0') return
        grid[i][j] = '0'
        helper(i+1,j)
        helper(i,j+1)
        helper(i-1,j)
        helper(i,j-1)
    }
};