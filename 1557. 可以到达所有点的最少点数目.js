// 1557. 可以到达所有点的最少点数目
// 给你一个 有向无环图 ， n 个节点编号为 0 到 n-1 ，以及一个边数组 edges ，其中 edges[i] = [fromi, toi] 表示一条从点  fromi 到点 toi 的有向边。

// 找到最小的点集使得从这些点出发能到达图中所有点。题目保证解存在且唯一。

// 你可以以任意顺序返回这些节点编号。

 

// 示例 1：



// 输入：n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
// 输出：[0,3]
// 解释：从单个节点出发无法到达所有节点。从 0 出发我们可以到达 [0,1,2,5] 。从 3 出发我们可以到达 [3,4,2,5] 。所以我们输出 [0,3] 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  const ans = [];
  const endSet = new Set();

  //记录终点
  edges.forEach(e => {
      endSet.add(e[1])
  })

  //只添加起点
  for (let i = 0; i < n; i++) {
      if (!endSet.has(i)) {
          ans.push(i);
      }
  }
  return ans;
};