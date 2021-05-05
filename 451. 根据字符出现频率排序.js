/* 451. 根据字符出现频率排序
给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

示例 1:

输入:
"tree"

输出:
"eert"

解释:
'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
示例 2:

输入:
"cccaaa"

输出:
"cccaaa"

解释:
'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。
示例 3:

输入:
"Aabb"

输出:
"bbAa"

解释:
此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const MAP = new Map();
  for(let i=0; i<s.length; i++){
      MAP.set(s[i],MAP.has(s[i]) ? MAP.get(s[i]) + 1 : 1 + s[i].charCodeAt()*0.001)
  }
  return s.split('').sort((a,b) => MAP.get(b) - MAP.get(a)).join('')
};


/* 首先根据 s 构造 HashMap，键值对中的键就是 s[i]，值就是 s[i] 出现的次数。
然后我们构造一个桶的集合，意思就是集合里的每个元素都是一个桶。我们维护第 i 个桶中存放 s 中出现次数为 i 的字符。
从后往前遍历这个桶的集合，并填充要返回的数组 res 即可
 */

var frequencySort = function(s) {
  const MAP = new Map();
  for(let i=0; i<s.length; i++){
      MAP.set(s[i],MAP.has(s[i]) ? MAP.get(s[i]) + 1 : 1)
  }
  const bucket = []

  for(let key of MAP.keys()){
    const i = MAP.get(key)
    if(!bucket[i]) {
      bucket[i] = []
    }
    bucket[i].push(key)
  }

  const ans = []
  for(let i = bucket.length-1; i >= 0; i--){
    if(bucket[i]){
        bucket[i].forEach(s => {
            for(let j = 1; j <= i; j++){
                ans.push(s)
            }
        })
    }
  }

  return ans.join('')
};