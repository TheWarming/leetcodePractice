/* 1081. 不同字符的最小子序列
返回 s 字典序最小的子序列，该子序列包含 s 的所有不同字符，且只包含一次。

注意：该题与 316 https://leetcode.com/problems/remove-duplicate-letters/ 相同

 

示例 1：

输入：s = "bcabc"
输出："abc"
示例 2：

输入：s = "cbacdcbc"
输出："acdb" */
const stack = []
for(let i = 0; i < s.length; i++){
    const c = s[i]
    if(stack.find(n => n===c)){
        continue
    }
    while(stack.length && c < stack[stack.length-1] && s.indexOf(stack[stack.length-1],i) !== -1){
        stack.pop()
    }
    stack.push(c)
}
return stack.join('')