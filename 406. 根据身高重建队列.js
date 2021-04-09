/**
 * @param {number[][]} people
 * @return {number[][]}
 */


 //身高从低到高排，因为低的不会影响高的位置
 //身高相同时，先排K值大的，因为K值大的排在后面，后面不会影响前面的（相同身高）排序
var reconstructQueue = function(people) {
  people.sort((a,b) => {
      if(a[0] === b[0]){
          return b[1] - a[1]
      }else{
          return a[0] - b[0]
      }
  })
  const ans = new Array(people.length)
  ans.fill(-1);
  people.forEach(p => {
      let space = p[1] + 1;
      for(let i = 0; i < ans.length; i++){
          if(ans[i] === -1){
              space--;
              if(space === 0){
                  ans[i] = p
              }
          }
      }
  })
  return ans
};