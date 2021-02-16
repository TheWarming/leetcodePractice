/* 941. 有效的山脉数组
给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

A.length >= 3
在 0 < i < A.length - 1 条件下，存在 i 使得：
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1] */
 
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  let flag = 0;
  for(let i = 1; i < arr.length; i++){
      switch(flag){
          case 0:
              if(arr[i] <= arr[i-1]) {
                  return false
              }else{
                  flag = 1
              }
              break
          case 1:
              if(arr[i] === arr[i-1]) return false
              if(arr[i] < arr[i-1]) flag = 2
              break
          case 2:
              if(arr[i] >= arr[i-1]) return false
              break
      }
  }
  return flag === 2
};


var validMountainArray = function(A) {
  const N = A.length;
  let i = 0;

  // 递增扫描
  while (i + 1 < N && A[i] < A[i + 1]) {
      i++;
  }

  // 最高点不能是数组的第一个位置或最后一个位置
  if (i === 0 || i === N - 1) {
      return false;
  }

  // 递减扫描
  while (i + 1 < N && A[i] > A[i + 1]) {
      i++;
  }

  return i === N - 1;
};

/* 正序逆序寻找最高点，判断位置是否一致不就可以了吗

class Solution:
    def validMountainArray(self, A: List[int]) -> bool:
        n = len(A)
        if n < 3:
            return False
        for i in range(n - 1):
            if A[i + 1] <= A[i]:
                break
        for j in range(n - 1, 0, -1):
            if A[j - 1] <= A[j]:
                break
        return i == j */

