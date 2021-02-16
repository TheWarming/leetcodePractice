/* 606. 根据二叉树创建字符串
你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。

空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。

示例 1:

输入: 二叉树: [1,2,3,4]
       1
     /   \
    2     3
   /    
  4     

输出: "1(2(4))(3)"

解释: 原本将是“1(2(4)())(3())”，
在你省略所有不必要的空括号对之后，
它将是“1(2(4))(3)”。
示例 2:

输入: 二叉树: [1,2,3,null,4]
       1
     /   \
    2     3
     \  
      4 

输出: "1(2()(4))(3)"

解释: 和第一个示例相似，
除了我们不能省略第一个对括号来中断输入和输出之间的一对一映射关系。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if(!t) return '';
  const res = [t.val];
  const help = function(node){
      if(node.left){
          helper(node.left)
      }else if(node.right){
          res.push('()')
      }
      if(node.right){
          helper(node.right)
      }
  }
  const helper = function(no){
      res.push('(' + no.val)
      help(no)
      res.push(')')
  }
  help(t);
  return res.join('')
};
var tree2str = function(t){
  // 递归终止条件
  if(t === null) return "";
  // 情况1
  if(t.left === null && t.right === null)
      return t.val+"";
    // 情况2
  if(t.right === null)
      return t.val+"("+tree2str(t.left)+")";
    // 情况3和4
  return t.val+"("+tree2str(t.left)+")("+tree2str(t.right)+")";   
}