/* 1122. 数组的相对排序
给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

 

示例：

输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19] */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const res1 = [];
  const res2 = [];
  const map = new Map()
  arr2.forEach((a,i) => {
      map.set(a,i)
  })
  arr1.forEach(a => {
      if(map.has(a)){
          res1.push(a)
      }else{
          res2.push(a)
      }
  })
  res1.sort((a,b) => map.get(a) - map.get(b))
  res2.sort((a,b) => a-b)
  return res1.concat(res2)
};
 