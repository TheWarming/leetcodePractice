/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if(n === 0) return true
  let count = 0;
  for(let i = 0; i < flowerbed.length; i++){
      if(flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1 ]){
          flowerbed[i] = 1;
          count++;
          if(count === n){
              return true
          }
      }
  }
  return count === n
};

var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  const m = flowerbed.length;
  let prev = -2;
  for (let i = 0; i < m; i++) {
      if (flowerbed[i] === 1) {
          count += Math.floor((i - prev - 2) / 2);
          if (count >= n) {
              return true;
          }
          prev = i;
      }
  }
  if (prev < 0) {
      count += (m + 1) / 2;
  } else {
      count += (m - prev - 1) / 2;
  }
  return count >= n;
};
