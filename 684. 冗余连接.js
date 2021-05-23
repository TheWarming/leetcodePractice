/* 684. 冗余连接
在本问题中, 树指的是一个连通且无环的无向图。

输入一个图，该图由一个有着N个节点 (节点值不重复1, 2, ..., N) 的树及一条附加的边构成。附加的边的两个顶点包含在1到N中间，这条附加的边不属于树中已存在的边。

结果图是一个以边组成的二维数组。每一个边的元素是一对[u, v] ，满足 u < v，表示连接顶点u 和v的无向图的边。

返回一条可以删去的边，使得结果图是一个有着N个节点的树。如果有多个答案，则返回二维数组中最后出现的边。答案边 [u, v] 应满足相同的格式 u < v。

示例 1：

输入: [[1,2], [1,3], [2,3]]
输出: [2,3]
解释: 给定的无向图为:
  1
 / \
2 - 3 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const uf = new UnionFind(edges.length)
  for(let i = 0; i < edges.length; i++){
      if(uf.unite(edges[i][0],edges[i][1])){
          return edges[i]
      }
  }
  return [0]
};

class UnionFind{
  constructor(n){
      this.union = new Array(n).fill(-1).map((n,i) => i)
      this.size = new Array(n).fill(1)
  }

  findSet(a){
      if(this.union[a] === a){
          return a
      }else{
          this.union[a] = this.findSet(this.union[a])
          return this.union[a]
      }
  }

  unite(a,b){
      let fa = this.findSet(a)
      let fb = this.findSet(b)
      if(fa === fb){
          return true
      }
      if(this.size[fb] > this.size[fa]){
          [fa,fb] = [fb,fa]
      }
      this.union[fb] = fa
      this.size[fa] += this.size[fb]
      return false
  }
}