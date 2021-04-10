/* 131. 分割回文串
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。

 

示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]] */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = [];
  const temp = [];

  recursion(s,0,s.length-1);
  return result;
  
  function isPalindrome(s)
  {
      let i=0,j=s.length-1;
      while(i<j)
      {
          if(s[i]!==s[j])
              return false;
          i++;
          j--;
      }
      return true;
  }
  
  function recursion(s,a,b)
  {
      //到字符串末尾了，将本次结果记录下来
      if(a > b)
      {
          result.push([...temp]);
          return;
      }
      //从index为a开始截取长度为1,2,3...的子串进行验证，成功则用剩下的部分递归。
      for(let i=1; i<=b-a+1; i++)
      {
          if(isPalindrome(s.substr(a,i)))
          {
              temp.push(s.substr(a,i));
              recursion(s,a+i,b);
              temp.pop();
          }
      }
  }
};