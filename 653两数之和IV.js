/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const arr = [];
  const help = function(node){
      if(!node) return
      node.left&&help(node.left);
      arr.push(node.val)
      node.right&&help(node.right);
  }
  help(root)
  let left = 0;
  let right = arr.length - 1
  while(left < right){
      const sum = arr[left] + arr[right]
      if(sum === k) {
          return true
      }else if (sum < k){
          left++
      }else{
          right--
      }
  }
  return false
};