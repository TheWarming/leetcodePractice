/* 1079. 活字印刷
你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。

注意：本题中，每个活字字模只能使用一次。

 

示例 1：

输入："AAB"
输出：8
解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。
示例 2：

输入："AAABBC"
输出：188 */

/**
 * @param {string} tiles
 * @return {number}
 */



// 就只一直选，选到没有为止，而且每次都是从头开始选，但会记录每次使用的情况
 var numTilePossibilities = function(tiles) {
  //统计每个字符的数量
  const count = new Array(26);
  count.fill(0)
  const A = 'A'.charCodeAt()
  for(let i = 0; i < tiles.length; i++){
      count[(tiles.charCodeAt(i) - A)]++
  }
  let res = 0
  backtrack(count);
  return res

  function backtrack(arr) {
      //遍历所有的字符
      for (let i = 0; i < 26; i++) {
          //如果当前字符使用完了再查找下一个
          if (arr[i] === 0)
              continue;
          //如果没使用完就继续使用，然后把这个字符的数量减1
          arr[i]--;
          //使用一个字符，子集数量就会多一个
          res++;
          backtrack(arr);
          //当前字符使用完之后，把它的数量还原
          arr[i]++;
      }
  }
};
