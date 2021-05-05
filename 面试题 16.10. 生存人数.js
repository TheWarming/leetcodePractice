/* 面试题 16.10. 生存人数
给定 N 个人的出生年份和死亡年份，第 i 个人的出生年份为 birth[i]，死亡年份为 death[i]，实现一个方法以计算生存人数最多的年份。

你可以假设所有人都出生于 1900 年至 2000 年（含 1900 和 2000 ）之间。如果一个人在某一年的任意时期处于生存状态，那么他应该被纳入那一年的统计中。例如，生于 1908 年、死于 1909 年的人应当被列入 1908 年和 1909 年的计数。

如果有多个年份生存人数相同且均为最大值，输出其中最小的年份。 */

/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function(birth, death) {
  //一共101个年份，多一个是2000 -1900 + 1
  const arr = new Array(101)
  arr.fill(0)

  /* 出生年份标记1, 死亡年份下一年标记-1*/
  for(let i = 0; i < birth.length; i++){
      arr[birth[i] - 1900]++
      arr[death[i] - 1900 + 1]--
  }

  let temp = 0;
  let max = 0;
  let ans = 0;
  for(let i = 0; i <= 100; i++){
      temp += arr[i]
      if(temp > max){
          max = temp
          ans = i
      }
  }
  return ans + 1900
};