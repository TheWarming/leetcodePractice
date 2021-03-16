/* 861. 翻转矩阵后的得分
有一个二维矩阵 A 其中每个元素的值为 0 或 1 。

移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。

在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。

返回尽可能高的分数。

 

示例：

输入：[[0,0,1,1],[1,0,1,0],[1,1,0,0]]
输出：39
解释：
转换为 [[1,1,1,1],[1,0,0,1],[1,1,1,1]]
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39 */

/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  const m = A.length, n = A[0].length;
  let ret = m * (1 << (n - 1));

  for (let j = 1; j < n; j++) {
      let nOnes = 0;
      for (let i = 0; i < m; i++) {
          if (A[i][0] === 1) {
              nOnes += A[i][j];
          } else {
              nOnes += (1 - A[i][j]); // 如果这一行进行了行反转，则该元素的实际取值为 1 - A[i][j]
          }
      }
      const k = Math.max(nOnes, m - nOnes);
      ret += k * (1 << (n - j - 1));
  }
  
  return ret;
};

/* 分三步走

第一步：将首列全部置位1，保证最高位全部取到，首列不为1的行全部翻转

第二步：从第二列开始，将所有列中1的数量小于0的数量的行翻转，保证取1的数量尽可能多

第三步：计算结果返回

class Solution {
public:
    int matrixScore(vector<vector<int>>& a) {
        //step1:翻转所有行，保证第一列全为1
        int m=a.size(),n=a[0].size();
        for (int i=0;i<m;i++)
        {
            if (a[i][0]!=1)
            {
                //翻转该行
                for (int j=0;j<n;j++)
                {
                    a[i][j]=!a[i][j];
                }
            }
        }
        //step2:从第二列开始，检查该列的1的数量是否大于等于0，如果不是，则翻转该列
        for (int j=1;j<n;j++)
        {
            int count=0;
            for (int i=0;i<m;i++)
            {
                if (a[i][j]) count++;
            }
            if (count<(m+1)/2)
            {
                for (int i=0;i<m;i++)
                {
                    a[i][j]=!a[i][j];
                }
            }
        }
        //step3:计算结果并返回
        int num=0;
        for(int j=0;j<n;j++)
        {
            int temp=pow(2,n-j-1);
            for (int i=0;i<m;i++)
            {
                num+=a[i][j]*temp;
            }
        }
        return num;
    }
};
 */