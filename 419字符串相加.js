/* 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

 

提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

var addStrings = function(num1, num2) {
    let res = []
    let carry = 0;
    let i = num1.length - 1
    let j = num2.length - 1
    while(!(i < 0 && j < 0) || carry){
        let sum = parseInt(num1[i]||'0') + parseInt(num2[j]||'0') + carry
        res.unshift(sum % 10)
        carry = parseInt(sum / 10);
        i--;
        j--;
    }
    return res.join('')
};