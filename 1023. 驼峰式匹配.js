/* 1023. 驼峰式匹配
如果我们可以将小写字母插入模式串 pattern 得到待查询项 query，那么待查询项与给定模式串匹配。（我们可以在任何位置插入每个字符，也可以插入 0 个字符。）

给定待查询列表 queries，和模式串 pattern，返回由布尔值组成的答案列表 answer。只有在待查项 queries[i] 与模式串 pattern 匹配时， answer[i] 才为 true，否则为 false。

 

示例 1：

输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
输出：[true,false,true,true,false]
示例：
"FooBar" 可以这样生成："F" + "oo" + "B" + "ar"。
"FootBall" 可以这样生成："F" + "oot" + "B" + "all".
"FrameBuffer" 可以这样生成："F" + "rame" + "B" + "uffer". */
/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  const ans = []
  for(const q of queries){
      const flag = check(q,pattern)
      ans.push(flag)
  }
  return ans

  function check(q,p){
      let ind = 0
      for(let i = 0; i < q.length; i++){
          //判断符合和大写不符合的
          if(ind < p.length && q[i] === p[ind]){
              ind++
          }else if(q[i] <= 'Z' && q[i] >= 'A'){
              return false
          }
      }
      return ind === p.length
  }
};