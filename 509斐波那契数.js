/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    return fib(n-1) + fib(n-2)
};

var fib = function(n) {
    if(n <= 1) return n
    let pre = 0;
    let sum = 1;
    for(let i = 2; i <= n; i++){
        let temp = sum;
        sum += pre;
        pre = temp;
    }
    return sum
};