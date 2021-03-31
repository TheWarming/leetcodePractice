function sort(arr){
  if(arr.length === 1 || arr.length === 0) return arr
  const ind = Math.ceil(arr.length/2)
  const mid = arr.splice(ind,1)[0]
  const left = []
  const right = []
  arr.forEach(n => {
    if(n < mid){
      left.push(n)
    }else{
      right.push(n)
    }
  })
  return sort(left).concat(mid,sort(right))
}
console.log(sort([5,8,9,4,2,5,3,6,8,4,11,15,21,84,51,36,94]))