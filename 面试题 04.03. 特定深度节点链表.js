/* 面试题 04.03. 特定深度节点链表
给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。

 

示例：

输入：[1,2,3,4,5,null,7,8]

        1
       /  \ 
      2    3
     / \    \ 
    4   5    7
   /
  8

  输出：[[1],[2,3],[4,5,7],[8]] */

  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
  const ans = [];
  const queue = [tree];
  while(queue.length){
      let len = queue.length;
      const head = new ListNode();
      let tail = head;
      while(len){
          len--;
          const node = queue.shift();
          const listNode = new ListNode(node.val);
          tail.next = listNode;
          tail = tail.next;
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
      ans.push(head.next);
  }
  return ans
};