/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num === 1) return false
    let n = 2;
    let sum = 1;
    while(n <= Math.sqrt(num)){
        if(num % n === 0){
            sum += n + num/n
        }
        n++
    }
    return sum === num
};