/* 289. 生命游戏
根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。

  */
/*
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const arr = board.map(n => [...n])
  const R = board.length
  const C = board[0].length
  for(let r = 0; r < R; r++){
      for(let c = 0; c < C; c++){
          helper(r,c)
      }
  }
  
  function helper(r,c){
      let count = 0;
      for(let i = r === 0 ? r : r - 1; i <= r + 1 && i < R; i++){
          for(let j = c === 0 ? c : c - 1; j <= c + 1 && j < C; j++){
              if(i === r && j === c) continue
              if(arr[i][j] === 1) count++
          }
      }
      if(count === 3 && board[r][c] === 0) {
          board[r][c] = 1
      }else if((count < 2 || count > 3) && board[r][c] === 1){
          board[r][c] = 0
      }
  }
};

//不复制数组
// -1代表活 -> 死
// 2 代表死 -> 活
var gameOfLife = function(board) {
  const R = board.length
  const C = board[0].length
  for(let r = 0; r < R; r++){
      for(let c = 0; c < C; c++){
          helper(r,c)
      }
  }
  for(let r = 0; r < R; r++){
    for(let c = 0; c < C; c++){
          if(board[r][c] === 2){
            board[r][c] = 1
          }else if(board[r][c] === -1){
            board[r][c] = 0
          }
    }
  }

  
  function helper(r,c){
      let count = 0;
      for(let i = r === 0 ? r : r - 1; i <= r + 1 && i < R; i++){
          for(let j = c === 0 ? c : c - 1; j <= c + 1 && j < C; j++){
              if(i === r && j === c) continue
              //注意还有-1
              if(board[i][j] === 1 || board[i][j] === -1) count++
          }
      }
      if(count === 3 && board[r][c] === 0) {
          board[r][c] = 2
      }else if((count < 2 || count > 3) && board[r][c] === 1){
          board[r][c] = -1
      }
  }
};