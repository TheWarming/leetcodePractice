/* 给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold Medal", "Silver Medal", "Bronze Medal"）。

(注：分数越高的选手，排名越靠前。)

示例 1:

输入: [5, 4, 3, 2, 1]
输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
解释: 前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” ("Gold Medal", "Silver Medal" and "Bronze Medal").
余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。
提示:

N 是一个正整数并且不会超过 10000。
所有运动员的成绩都不相同。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/relative-ranks
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    if(nums.length === 1) return ["Gold Medal"]
    let arr = new Array(...nums);
    arr.sort((a,b) => b-a);
    let res = []
    nums.forEach(value => {
        let reward = arr.indexOf(value);
        if(reward === 0){
            reward = 'Gold Medal'
        }else if (reward === 1){
            reward = 'Silver Medal'
        }else if (reward === 2){
            reward = 'Bronze Medal'
        }else{
            reward = (reward + 1).toString()
        }
        res.push(reward);
    })
    return res
};