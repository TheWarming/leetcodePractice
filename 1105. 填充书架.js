/* 1105. 填充书架
附近的家居城促销，你买回了一直心仪的可调节书架，打算把自己的书都整理到新的书架上。

你把要摆放的书 books 都整理好，叠成一摞：从上往下，第 i 本书的厚度为 books[i][0]，高度为 books[i][1]。

按顺序 将这些书摆放到总宽度为 shelf_width 的书架上。

先选几本书放在书架上（它们的厚度之和小于等于书架的宽度 shelf_width），然后再建一层书架。重复这个过程，直到把所有的书都放在书架上。

需要注意的是，在上述过程的每个步骤中，摆放书的顺序与你整理好的顺序相同。 例如，如果这里有 5 本书，那么可能的一种摆放情况是：第一和第二本书放在第一层书架上，第三本书放在第二层书架上，第四和第五本书放在最后一层书架上。

每一层所摆放的书的最大高度就是这一层书架的层高，书架整体的高度为各层高之和。

以这种方式布置书架，返回书架整体可能的最小高度。 */
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
  const dp = new Array(books.length+1).fill(Number.MAX_VALUE)
  dp[0] = 0
  //i表示第i+1本书放在最后I层的情况下的最小高度
  //第I层的最小高度就是从i+1本书开始放 哪个最高就哪个
  for(let i = 1; i < dp.length; i++){
      let wid = 0
      let hei = 0
      for(let j = i - 1; j >= 0; j--){
          const w = books[j][0]
          wid += w
          if(wid > shelfWidth) break
          hei = Math.max(hei,books[j][1])
          dp[i] = Math.min(dp[i],dp[j]+hei)
      }
  }
  return dp[dp.length-1]
};