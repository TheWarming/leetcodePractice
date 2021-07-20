/* 1324. 竖直打印单词
给你一个字符串 s。请你按照单词在 s 中的出现顺序将它们全部竖直返回。
单词应该以字符串列表的形式返回，必要时用空格补位，但输出尾部的空格需要删除（不允许尾随空格）。
每个单词只能放在一列上，每一列中也只能有一个单词。

 

示例 1：

输入：s = "HOW ARE YOU"
输出：["HAY","ORO","WEU"]
解释：每个单词都应该竖直打印。 
 "HAY"
 "ORO"
 "WEU" */
 /**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
  const arr = s.split(' ')
  const max = arr.reduce((pre,n) => Math.max(pre,n.length),0)
  const ans = new Array(max)
  for(let j = 0; j < max; j++){
      let temp = ''
      let s = ''
      for(let i = 0; i < arr.length; i++){
          if(arr[i][j]){
              s += temp + arr[i][j]
              temp = ''
          }else{
              temp += ' '
          }
      } 
      ans[j] = s
  }
  return ans
};