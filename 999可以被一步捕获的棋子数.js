/* 999. 可以被一步捕获的棋子数
在一个 8 x 8 的棋盘上，有一个白色的车（Rook），用字符 'R' 表示。棋盘上还可能存在空方块，白色的象（Bishop）以及黑色的卒（pawn），分别用字符 '.'，'B' 和 'p' 表示。不难看出，大写字符表示的是白棋，小写字符表示的是黑棋。

车按国际象棋中的规则移动。东，西，南，北四个基本方向任选其一，然后一直向选定的方向移动，直到满足下列四个条件之一：

棋手选择主动停下来。
棋子因到达棋盘的边缘而停下。
棋子移动到某一方格来捕获位于该方格上敌方（黑色）的卒，停在该方格内。
车不能进入/越过已经放有其他友方棋子（白色的象）的方格，停在友方棋子前。
你现在可以控制车移动一次，请你统计有多少敌方的卒处于你的捕获范围内（即，可以被一步捕获的棋子数）。 */


/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  function getPos(board){
      for(let i = 0; i < board.length; i++){
          for(let j = 0; j < board[0].length;j++){
              if(board[i][j] === 'R'){
                  return [i,j]
              }
          }
      }
  }
  const pos = getPos(board);
  let count = 0;
  for(let c = pos[1]; c < board[0].length; c++){
      if(board[pos[0]][c] === "B"){
          break
      }else if(board[pos[0]][c] === "p"){
          count++
          break
      }
  }
  for(let c = pos[1]; c >= 0; c--){
      if(board[pos[0]][c] === "B"){
          break
      }else if(board[pos[0]][c] === "p"){
          count++
          break
      }
  }
  for(let r = pos[0]; r >= 0; r--){
      if(board[r][pos[1]] === "B"){
          break
      }else if(board[r][pos[1]] === "p"){
          count++
          break
      }
  }
  for(let r = pos[0]; r < board.length; r++){
      if(board[r][pos[1]]  === "B"){
          break
      }else if(board[r][pos[1]] === "p"){
          count++
          break
      }
  }
  return count
};

var numRookCaptures = function(board) {
  let cnt = 0, st = 0, ed = 0;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < 8; ++i) {
      for (let j = 0; j < 8; ++j) {
          if (board[i][j] == 'R') {
              st = i;
              ed = j;
              break;
          }
      }
  }
  for (let i = 0; i < 4; ++i) {
      for (let step = 0;; ++step) {
          const tx = st + step * dx[i];
          const ty = ed + step * dy[i];
          if (tx < 0 || tx >= 8 || ty < 0 || ty >= 8 || board[tx][ty] == 'B') {
              break;
          }
          if (board[tx][ty] == 'p') {
              cnt++;
              break;
          }
      }
  }
  return cnt;
};
 