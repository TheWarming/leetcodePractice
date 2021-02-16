/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let set1 = new Set(['q','w','e','r','t','y','u','i','o','p']);
    let set2 = new Set(['a','s','d','f','g','h','j','k','l']);
    let set3 = new Set(['z','x','c','v','b','n','m']);
    const helper = function(set,word){
        if(set.has(word[0].toLowerCase())){
            myset = set;
        }
    }
    let myset;
    let flag = 0;
    let res = [];
    for(let i = 0; i < words.length; i++){
        helper(set1,words[i]);
        helper(set3,words[i]);
        helper(set2,words[i]);
        let flag = true;
        for(let j = 1; j < words[i].length; j++){
            if(!myset.has(words[i][j].toLowerCase())) {
                flag = false;
                break
            }
        }
        if(flag) res.push(words[i])
    }
    return res
};