/* 1379. 找出克隆二叉树中的相同节点
给你两棵二叉树，原始树 original 和克隆树 cloned，以及一个位于原始树 original 中的目标节点 target。

其中，克隆树 cloned 是原始树 original 的一个 副本 。

请找出在树 cloned 中，与 target 相同 的节点，并返回对该节点的引用（在 C/C++ 等有指针的语言中返回 节点指针，其他语言返回节点本身）。

 

注意：

你 不能 对两棵二叉树，以及 target 节点进行更改。
只能 返回对克隆树 cloned 中已有的节点的引用。
进阶：如果树中允许出现值相同的节点，你将如何解答？ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  if (original === null){
      return null;
  }
  if (original === target){
      return cloned;
  }
  // 递归
  const res = getTargetCopy(original.left,cloned.left,target);
  if (res !== null){
      return res;
  }else{
      return getTargetCopy(original.right,cloned.right,target);
  }
};