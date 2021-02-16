/* 937. 重新排列日志文件
你有一个日志数组 logs。每条日志都是以空格分隔的字串。

对于每条日志，其第一个字为字母与数字混合的 标识符 ，除标识符之外的所有字为这一条日志的 内容 。

除标识符之外，所有字均由小写字母组成的，称为 字母日志
除标识符之外，所有字均由数字组成的，称为 数字日志
题目所用数据保证每个日志在其标识符后面至少有一个字。

请按下述规则将日志重新排序：

所有 字母日志 都排在 数字日志 之前。
字母日志 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序；
数字日志 应该按原来的顺序排列。
返回日志的最终顺序。

 

示例 ：

输入：["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
输出：["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"] */

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  if(logs.length === 1 || logs.length === 0) return logs
  function isNum(n){
      return !isNaN(parseInt(n))
  }  
  logs.sort((l1,l2) => {
      const [id1,...rest1] = l1.split(' ')
      const [id2,...rest2] = l2.split(' ')
      const isNumber1 = isNum(rest1[0])
      const isNumber2 = isNum(rest2[0])
      if(isNumber1 && isNumber2){
          return 0
      }else if (isNumber1){
          return 1
      }else if(isNumber2){
          return -1
      }
      const resLog1 = rest1.join(' ');
      const resLog2 = rest2.join(' ');
      if(resLog1 === resLog2){
          return id1 > id2 ? 1 : -1
      }else{
          return resLog1 > resLog2 ? 1 : -1
      }
  })
  return logs
};

/* 如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：

如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。 */