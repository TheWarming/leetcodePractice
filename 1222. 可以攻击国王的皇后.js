/* 1222. 可以攻击国王的皇后
在一个 8x8 的棋盘上，放置着若干「黑皇后」和一个「白国王」。

「黑皇后」在棋盘上的位置分布用整数坐标数组 queens 表示，「白国王」的坐标用数组 king 表示。

「黑皇后」的行棋规定是：横、直、斜都可以走，步数不受限制，但是，不能越子行棋。

请你返回可以直接攻击到「白国王」的所有「黑皇后」的坐标（任意顺序）。 */

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
  const ans = []

  const SET = new Set()
  queens.forEach(n => {
      SET.add(n[0]*10 + n[1])
  })

  const idir = [-1,1,0,0,-1,1,-1,1]
  const jidr = [0,0,-1,1,-1,1,1,-1]

  let ilo = king[0]
  let jlo = king[1]

  for(let i = 0; i < idir.length; i++){
      let icur = ilo
      let jcur = jlo
      while(icur >= 0 && jcur >= 0 && icur <=7 && jcur <= 7){
          icur += idir[i]
          jcur += jidr[i]
          if(SET.has(icur*10 + jcur)){
              ans.push([icur,jcur])
              break
          }
      }
  }

  return ans
};