/* 594. 最长和谐子序列
和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。

现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。

示例 1:

输入: [1,3,2,2,5,2,3,7]
输出: 5
原因: 最长的和谐数组是：[3,2,2,2,3]. */

/**
 * @param {number[]} nums
 * @return {number}
 */


 //太傻了 别再想纯数学的方法了
var findLHS = function(nums) {
    let max = 0;
    let mymap = new Map();
    for(let item of nums){
        if(mymap.has(item)){
            mymap.set(item,mymap.get(item)+1);
        }else{
            mymap.set(item,1);
        }
    }
    for(let k of mymap.keys()){
        if(mymap.has(k+1)){
            max = Math.max(max,mymap.get(k) + mymap.get(k+1))
        }
    }
    return max
};

var findLHS = function(nums) {
    let max = 0;
    let mymap = new Map();
    for(let item of nums){
        if(mymap.has(item)){
            mymap.set(item,mymap.get(item)+1);
        }else{
            mymap.set(item,1);
        }
        if(mymap.has(item + 1)){
            max = Math.max(max,mymap.get(item) + mymap.get(item+1))
        }
        if(mymap.has(item - 1)){
            max = Math.max(max,mymap.get(item) + mymap.get(item-1))
        }
    }
    return max
};