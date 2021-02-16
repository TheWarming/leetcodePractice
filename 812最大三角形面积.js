/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  const length = points.length;
  let res = 0;
  const helper = function(i,j,k){
      const [x1,y1] = i;
      const [x2,y2] = j;
      const [x3,y3] = k;
      return Math.abs(x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2))/2
  }
  for(let i = 0; i < length; i++){
      for(let j = i + 1; j < length; j++){
          for(let k = j + 1; k < length; k++){
              res = Math.max(helper(points[i],points[j],points[k]),res)
          }
      }
  }
  return res
};