/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  stones.sort((a,b) => b-a)
  while(stones.length !== 1){
      const s1 = stones.shift();
      const s2 = stones.shift();
      if(stones.length === 0){
          return s1 - s2
      }else if(s1 !== s2){
          const s = s1 - s2
          if(stones.length === 1){
              if(s < stones[0]){
                  stones.push(s)
              }else{
                  stones.unshift(s)
              }
          }else{
              if(s <= stones[stones.length-1]){
                  stones.push(s)
              }else if(s >= stones[0]){
                  stones.unshift(s)
              }else{
                  for(let i = 1; i < stones.length; i++){
                      if(s >= stones[i] && s <= stones[i-1]){
                          stones.splice(i,0,s)
                          break
                      }
                  }
              }
          }
      }
  } 
  return stones[0]
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  const pq = new MaxPriorityQueue();
  for (const stone of stones) {
      pq.enqueue('x', stone);
  }
  
  while (pq.size() > 1) {
      const a = pq.dequeue()['priority'];
      const b = pq.dequeue()['priority'];
      if (a > b) {
          pq.enqueue('x', a - b);
      }
  }
  return pq.isEmpty() ? 0 : pq.dequeue()['priority'];
};