/* 1319. 连通网络的操作次数
用以太网线缆将 n 台计算机连接成一个网络，计算机的编号从 0 到 n-1。线缆用 connections 表示，其中 connections[i] = [a, b] 连接了计算机 a 和 b。

网络中的任何一台计算机都可以通过网络直接或者间接访问同一个网络中其他任意一台计算机。

给你这个计算机网络的初始布线 connections，你可以拔开任意两台直连计算机之间的线缆，并用它连接一对未直连的计算机。请你计算并返回使所有计算机都连通所需的最少操作次数。如果不可能，则返回 -1 。 */ 

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  if(connections.length < n-1) return -1
  const map = new Map()
  connections.forEach(([a,b])=> {
      map.has(a) ? map.get(a).push(b): map.set(a,[b])
      map.has(b) ? map.get(b).push(a): map.set(b,[a])
  })
  const use = new Array(n).fill(false)
  let ans = -1
  for(let i = 0; i < n; i++){
      if(!use[i]){
          dfs(i)
          ans++
      }
  }
  return ans

  function dfs(i){
      if(use[i] === false && map.get(i)){
          use[i] =  true
          map.get(i).forEach(n => {
              dfs(n)
          })
      }
  }
};


var makeConnected = function(n, connections) {
    if(connections.length < n-1) return -1
    const unionFind = new UnionFind(n)
    console.log(unionFind.count)
    connections.forEach(([a,b]) => {
        unionFind.unite(a,b)
    })
    return unionFind.count-1
};


//并查集  模板
class UnionFind{
    constructor(n){
        //初始化为自己为自己的父节点
        this.union = new Array(n).fill(-1).map((n,i) => i)
        this.size = new Array(n).fill(1)
        this.count = n
    }
    //让他们的父节点为同一个根节点
    findSet(i){
        if(this.union[i] === i){
            return i
        }
        this.union[i] = this.findSet(this.union[i])
        return this.union[i]
    }
    unite(a,b){
        let fa = this.findSet(a)
        let fb = this.findSet(b)
        if(fa === fb){
            return true
        }
        if(this.size[fa] < this.size[fb]){
            [fa,fb] = [fb,fa]
        }
        this.union[fb] = fa
        this.size[fa] += this.size[fb]
        this.count--
        return false
    }

}