/* 529. 扫雷游戏
让我们一起来玩扫雷游戏！

给定一个代表游戏板的二维字符矩阵。 'M' 代表一个未挖出的地雷，'E' 代表一个未挖出的空方块，'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块，数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻，'X' 则表示一个已挖出的地雷。

现在给出在所有未挖出的方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：

如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的未挖出方块都应该被递归地揭露。
如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
如果在此次点击中，若无更多方块可被揭露，则返回面板。 */

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  const r = click[0]
  const c = click[1]
  const rlen = board.length
  const clen = board[0].length
  if(board[r][c] === 'M') {
      board[r][c] = 'X'
  }else{
      dfs(r,c)
  }
  return board

  function dfs(r,c){
      if(board[r][c] === 'B') return
      let count = 0
      for(let i = r === 0 ? 0 : r-1; i <= (r === rlen - 1 ? r : r +1); i++){
          for(let j = c === 0 ? 0 : c-1; j <= (c === clen - 1 ? c : c +1); j++){
              if(board[i][j] === 'M'){
                  count++
              }
          }
      }
      if(count > 0){
          board[r][c] = count+''
      }else{
          board[r][c] = 'B'
          for(let i = r === 0 ? 0 : r-1; i <= (r === rlen - 1 ? r : r +1); i++){
              for(let j = c === 0 ? 0 : c-1; j <= (c === clen - 1 ? c : c +1); j++){
                  dfs(i,j)
              }
          }  
      }
  }
};