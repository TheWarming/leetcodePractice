/* 836. 矩形重叠
矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。矩形的上下边平行于 x 轴，左右边平行于 y 轴。

如果相交的面积为 正 ，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。

给出两个矩形 rec1 和 rec2 。如果它们重叠，返回 true；否则，返回 false 。

 

示例 1：

输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
输出：true
示例 2：

输入：rec1 = [0,0,1,1], rec2 = [1,0,2,1]
输出：false
示例 3：

输入：rec1 = [0,0,1,1], rec2 = [2,2,3,3]
输出：false */
/* 
解法1 判断在不在上下左右 然后取反！ */
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  //判断是不是矩形
  if(rec1[0] === rec1[2] || rec2[0] === rec2[2] || rec1[1] === rec1[3] || rec2[1] === rec2[3]) return false
  //判断： 左  右  上  下
  return !(rec2[2] <= rec1[0] || rec2[0] >= rec1[2] || rec2[1] >= rec1[3] || rec2[3] <= rec1[1])
};


/* 方法2
如果两个矩形重叠，那么它们重叠的区域一定也是一个矩形，那么这代表了两个矩形与 xx 轴平行的边（水平边）投影到 xx 轴上时会有交集
，与 yy 轴平行的边（竖直边）投影到 yy 轴上时也会有交集。因此，我们可以将问题看作一维线段是否有交集的问题。
*/
var isRectangleOverlap = function(rec1, rec2) {
  return (Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) &&
  Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]));
};
