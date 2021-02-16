/* 1128. 等价多米诺骨牌对的数量
给你一个由一些多米诺骨牌组成的列表 dominoes。

如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。

形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。

在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。

 

示例：

输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1 */
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const map = new Map();
  dominoes.forEach(d => {
      const d1 = d[0];
      const d2 = d[1];
      if(map.has(d1+ '-' +d2)){
          map.set(d1+ '-' +d2,map.get(d1+ '-' +d2) + 1)
      }else if(map.has(d2+ '-' +d1)){
          map.set(d2+ '-' +d1,map.get(d2+ '-' +d1) + 1)
      }else{
          map.set(d1+ '-' +d2,1)
      }
  })
  let res = 0;
  for(let value of map.values()){
      res += helper(value)
  }
  function helper(n){
      let res = 0;
      n--
      while(n){
          res += n;
          n--
      }
      return res
  }
  return res
};

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const map = new Map();
  let res = 0;
  dominoes.forEach(d => {
      const d1 = d[0];
      const d2 = d[1];
      if(map.has(d1+ '-' +d2)){
          const v = map.get(d1+ '-' +d2);
          res += v;
          map.set(d1+ '-' +d2,v + 1)
      }else if(map.has(d2+ '-' +d1)){
          const v = map.get(d2+ '-' +d1);
          res += v;
          map.set(d2+ '-' +d1,v + 1)
      }else{
          map.set(d1+ '-' +d2,1)
      }
  })
  return res
};

var numEquivDominoPairs = function(dominoes) {
  const num = new Array(100).fill(0);
  let ret = 0;
  for (const domino of dominoes) {
      const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
      ret += num[val];
      num[val]++;
  }
  return ret;
};