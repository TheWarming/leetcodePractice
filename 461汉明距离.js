/* 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.

示例:

输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
 */
/* 来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/hamming-distance
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0;
    while( x / 2 || y / 2) {
        count +=  (x % 2) ^ (y % 2)
        x = parseInt(x/2);
        y = parseInt(y/2);
    }
    return count
};

var hammingDistance = function(x,y){
    let xor = x ^ y;
    let distance = 0;
    while (xor != 0) {
        if(xor & 1 === 1){
            distance ++
        }
        xor = xor >> 1;
    }
    return distance;
}


//布赖恩·克尼根算法
/*
当我们在 number 和 number-1 上做 AND 位运算时，原数字 number 的最右边等于 1 的比特会被移除。
*/ 
var hammingDistance = function(x,y){
    let xor = x ^ y;
    let distance = 0;
    while (xor != 0) {
        distance += 1;
        xor = xor & (xor - 1);
    }
    return distance;
}
