/* 1780. 判断一个数字是否可以表示成三的幂的和
给你一个整数 n ，如果你可以将 n 表示成若干个不同的三的幂之和，请你返回 true ，否则请返回 false 。

对于一个整数 y ，如果存在整数 x 满足 y == 3x ，我们称这个整数 y 是三的幂。

 

示例 1：

输入：n = 12
输出：true
解释：12 = 31 + 32 */

/**
 * @param {number} n
 * @return {boolean}
 */
const arr= []
for(let i = 0; i <= 14; i++){
    arr.push(Math.pow(3,i))
}
console.log(arr)
var checkPowersOfThree = function(n) {
    let flag = false
    dfs(0,0)
    return flag

    function dfs(ix,sum){
        if(sum > n || flag){
            return 
        }
        if(sum === n){  
            flag = true
            return 
        }
        for(let i = ix; i < arr.length; i++){
            sum += arr[i]
            dfs(i+1,sum)
            sum -= arr[i]
        }
    }
};

/* 如果一个数字可以表示成三的幂的和，那么这个数字转换为三进制后，数字应该只有0和1 */

var checkPowersOfThree = function(n){
  while (n > 0) {
    if (n % 3 === 2) {
        return false;
    }
    n = parseInt(n/3);
  }
  return true;
}