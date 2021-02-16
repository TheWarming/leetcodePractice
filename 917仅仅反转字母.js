/* 917. 仅仅反转字母
给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。

 

示例 1：

输入："ab-cd"
输出："dc-ba"
示例 2：

输入："a-bC-dEf-ghIj"
输出："j-Ih-gfE-dCba"
示例 3：

输入："Test1ng-Leet=code-Q!"
输出："Qedo1ct-eeLg=ntse-T!" */

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  if(S.length === 0 || S.length === 1) return S
  let left = 0;
  let right = S.length - 1;
  const arr = S.split('');
  let l = arr[left].charCodeAt()
  let r = arr[right].charCodeAt()
  while(left < right){
      while(l > 122 || 65 > l || (l > 90 && 97 > l)){
          left++;
          if(left >= S.length) break
          l = arr[left].charCodeAt()
      }

      while(r > 122 || 65 > r || (r > 90 && 97 > r)){
          right--;
          if(right < 0) break
          r = arr[right].charCodeAt()
      }

      if(left < right){
          [arr[left],arr[right]] = [arr[right],arr[left]]
          left++;
          right--;
          l = arr[left].charCodeAt()
          r = arr[right].charCodeAt()
      }
  }
  return arr.join('')
};

var reverseOnlyLetters = function (S) {
  let left = 0;// 左指针
  let right = S.length - 1;// 右指针
  const charArr = S.split('');
  while (left < right) {
      while (!(/[a-zA-Z]/).test(charArr[left])) {
          left++
      }
      while (!(/[a-zA-Z]/).test(charArr[right])) {
          right--
      }
      if (left < right) {
          [charArr[left], charArr[right]] = [charArr[right], charArr[left]]
      }
      left++;
      right--;
  }

  return charArr.join('')
};