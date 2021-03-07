/* 1496. 判断路径是否相交
给你一个字符串 path，其中 path[i] 的值可以是 'N'、'S'、'E' 或者 'W'，分别表示向北、向南、向东、向西移动一个单位。

机器人从二维平面上的原点 (0, 0) 处开始出发，按 path 所指示的路径行走。

如果路径在任何位置上出现相交的情况，也就是走到之前已经走过的位置，请返回 True ；否则，返回 False 。

 

示例 1：



输入：path = "NES"
输出：false 
解释：该路径没有在任何位置相交。 */

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  const SET = new Set([0])
  let x = 0;
  let y = 0;
  for(let i = 0; i < path.length; i++){
      switch(path[i]){
          case 'N':
              y++
              break
          case 'S':
              y--
              break
          case 'E':
              x++
              break
          case 'W':
              x--
              break
      }
      const p = x * 10000 + y
      if(SET.has(p)){
          return true
      }else{
          SET.add(p)
      }
  }
  return false
};