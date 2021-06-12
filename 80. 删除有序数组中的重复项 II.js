/* 80. 删除有序数组中的重复项 II
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 

说明：

为什么返回数值是整数，但输出的答案是数组呢？

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

示例 1：

输入：nums = [1,1,1,2,2,3]
输出：5, nums = [1,1,2,2,3]
解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。 不需要考虑数组中超出新长度后面的元素。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let flag = false
  for(let i = 1; i < nums.length ; i++){
      if(nums[i] === nums[i-1]){
          if(flag){
              nums.splice(i,1)
              i--
          }else{
              flag = true
          }
      }else{
          flag = false
      }
  }
  return nums.length
};

var removeDuplicates = function(nums) {
  const n = nums.length;
  if (n <= 2) {
      return n;
  }
  //fast为当前需要检查的元素，slow是当前检查后的数组长度
  let slow = 2, fast = 2;
  while (fast < n) {
      //因为可以保存相同的两个，所以slow-2   -1就只会保留一个
      if (nums[slow - 2] != nums[fast]) {
        //数值不同所以保留当前fast的数值，slow数组长度增加
          nums[slow] = nums[fast];
          ++slow;
      }
      //数值相同所以不保留，fast转到下一位
      ++fast;
  }
  return slow;
};

/* 作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/solution/shan-chu-pai-xu-shu-zu-zhong-de-zhong-fu-yec2/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */