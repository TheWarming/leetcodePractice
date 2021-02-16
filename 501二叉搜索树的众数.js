var findMode = function(root) {
    let res = [];
    let mymap = new Map();
    let max = 0;
    const helper = function(node){
        if(!node) return
        if(mymap.has(node.val)){
            mymap.set(node.val,mymap.get(node.val) + 1)
        }else{
            mymap.set(node.val,1)
        }
        helper(node.left);
        helper(node.right);
    }
    helper(root)
    mymap.forEach(value => {
        if(value > max) max = value
    })
    mymap.forEach((value,key)=> {
        if(value === max) res.push(key)
    })
    return res
};
// 中序遍历二叉搜索树等于遍历有序数组

var findMode = function(root) {
    let base = 0, count = 0, maxCount = 0;
    let answer = [];

    const update = (x) => {
        if (x === base) {
            ++count;
        } else {
            count = 1;
            base = x;
        }
        if (count === maxCount) {
            answer.push(base);
        }
        if (count > maxCount) {
            maxCount = count;
            answer = [base];
        }
    }

    const dfs = (o) => {
        if (!o) {
            return;
        }
        dfs(o.left);
        update(o.val);
        dfs(o.right);
    }

    dfs(root);
    return answer;
};