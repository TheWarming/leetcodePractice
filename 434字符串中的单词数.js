var countSegments = function(s) {
    s = s + ' ';
    let count = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] != ' '&& s[i+1] === ' ') count++
    }
    return count
};

var countSegments = function(s) {
    let str = s.trim();
    if(str === '') return 0
    return str.split(/\s+/).length
};