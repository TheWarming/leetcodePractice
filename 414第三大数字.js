var thirdMax = function(nums) {
    let arr = [...new Set(nums)];
    arr.sort((a,b)=>b-a)
    return arr[2]||arr[2] === 0?arr[2]:arr[0]
};

var thirdMax = function(nums) {
    let first = undefined;
    let second = undefined;
    let res = undefined;
    nums.forEach(x => {
        if(first < x || first === undefined){
            [first,second,res] = [x,first,second]
        }else if(x !== first && ((second < x) || second === undefined)){
            [second,res] = [x,second]
        }else if(x !== second && x !== first && (res < x || res === undefined)){
            res = x
        }
    })
    return res === undefined ? first : res
};

var thirdMax = function(nums) {
    let max1 = null;
    let max2 = null;
    let max3 = null;
    nums.forEach(x => {
        if (max1 === x || max2 === x || max3 === x) return
        if ((max1 === null) || x > max1) {
            max3 = max2;
            max2 = max1;
            max1 = x;
        }
        else if ((max2 === null) || x > max2) {
            max3 = max2;
            max2 = x;
        }
        else if ((max3 === null) || x > max3) {
            max3 = x;
        }
    });
    if (max3 === null) {
        return max1;
    }else {
        return max3;
    }
};