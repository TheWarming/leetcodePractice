/* 面试题 16.20. T9键盘
在老式手机上，用户通过数字键盘输入，手机将提供与这些数字相匹配的单词列表。每个数字映射到0至4个字母。给定一个数字序列，实现一个算法来返回匹配单词的列表。你会得到一张含有有效单词的列表。映射如下图所示：



示例 1:

输入: num = "8733", words = ["tree", "used"]
输出: ["tree", "used"] */

/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
var getValidT9Words = function(num, words) {
  const arr = "22233344455566677778889999".split('')
  const ans = []
  words.forEach(w => {
      if(w.length === num.length){
          let flag = true
          for(let i = 0; i < num.length; i++){
              console.log(w.charCodeAt(i) - 97)
              if(num[i] !== arr[w.charCodeAt(i) - 97]) {
                  flag = false
                  break
              }
          }
          flag && ans.push(w)
      }
  })
  return ans
};