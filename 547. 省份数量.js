/* 547. 省份数量
有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。

返回矩阵中 省份 的数量。

 

示例 1：


输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
输出：2 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
class UnitSet{
  constructor(n){
      this.sets = new Array(n+1).fill(-1).map((n,i) => i)
      this.sizes = new Array(n).fill(1)
      this.count = n
  }

  findSet(n){
      if(this.sets[n] === n) return n
      return this.findSet(this.sets[n])
  }

  unit(a,b){
      let fa = this.findSet(a)
      let fb = this.findSet(b)
      if(fa === fb) return true
      if(this.sizes[fb] > this.sizes[fa]){
          [fa,fb] = [fb,fa]
      }
      this.sizes[fa] += this.sizes[fb]
      this.sets[fb] = fa
      this.count--
      return false
  }
}
var findCircleNum = function(isConnected) {
  const fs = new UnitSet(isConnected.length)
  for(let i = 0; i < isConnected.length; i++){
      for(let j = 0; j < isConnected[0].length; j++){
          if(isConnected[i][j] === 1 && i !== j){
              fs.unit(i+1,j+1)
          }
      }
  }
  return fs.count
};