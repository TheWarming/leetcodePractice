/* 1395. 统计作战单位数
 n 名士兵站成一排。每个士兵都有一个 独一无二 的评分 rating 。

每 3 个士兵可以组成一个作战单位，分组规则如下：

从队伍中选出下标分别为 i、j、k 的 3 名士兵，他们的评分分别为 rating[i]、rating[j]、rating[k]
作战单位需满足： rating[i] < rating[j] < rating[k] 或者 rating[i] > rating[j] > rating[k] ，其中  0 <= i < j < k < n
请你返回按上述条件可以组建的作战单位数量。每个士兵都可以是多个作战单位的一部分。

 

示例 1：

输入：rating = [2,5,3,4,1]
输出：3
解释：我们可以组建三个作战单位 (2,3,4)、(5,4,1)、(5,3,1) 。 */
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let count = 0
  for(let i = 0; i < rating.length - 2; i++){
      for(let j = i+1; j < rating.length - 1; j++){
          for(let k = j+1; k < rating.length; k++){
              if((rating[k] < rating[j] && rating[j] < rating[i]) || rating[k] > rating[j] && rating[j] > rating[i]){
                  count++
              }
          }
      }
  }
  return count
};

var numTeams = function(rating) {
  const n = rating.length;
  let ans = 0;
  // 枚举三元组中的 j
  for (let j = 1; j < n - 1; ++j) {
    let iless = 0, imore = 0;
    let kless = 0, kmore = 0;
    for (let i = 0; i < j; ++i) {
        if (rating[i] < rating[j]) {
            ++iless;
        }
        // 注意这里不能直接写成 else
        // 因为可能有评分相同的情况
        else if (rating[i] > rating[j]) {
            ++imore;
        }
    }
    for (let k = j + 1; k < n; ++k) {
        if (rating[k] < rating[j]) {
            ++kless;
        } else if (rating[k] > rating[j]) {
            ++kmore;
        }
    }
    ans += iless * kmore + imore * kless;
  }
  return ans;
};


