/* 566. 重塑矩阵
在MATLAB中，有一个非常有用的函数 reshape，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。

给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。

重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。

如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

示例 1:

输入: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
输出: 
[[1,2,3,4]]
解释:
行遍历nums的结果是 [1,2,3,4]。新的矩阵是 1 * 4 矩阵, 用之前的元素值一行一行填充新矩阵。
/** */
/*  * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */ 
var matrixReshape = function(nums, r, c) {
    const arr =  nums.join().split(',').map(Number);
    const res = []
    if(arr.length < r * c) return nums
    for(let i = 0 ; i < r; i++){
        res.push([])
        for(let j = 0; j < c; j++){
            res[i].push(arr[j + c * i])
        }
    }
    return res
};


var matrixReshape = function(nums, r, c) {
    if(nums.length === 0 || nums.length * nums[0].length !== r * c) return nums
    /**竟然还有这么坑！！！！！！！！！！！！！！！！！！！！！！！！！！！！！ */
    const res = new Array(r).fill(1).map(i => [])
    let count = 0;
    let rc = 0;
    nums.forEach(arr => {
        arr.forEach(item => {
            res[rc].push(item);
            count++
            if(count === c){
                count = 0;
                rc++
            }
        })
    })
    return res
};