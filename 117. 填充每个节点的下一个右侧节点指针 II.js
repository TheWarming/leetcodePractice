/* 117. 填充每个节点的下一个右侧节点指针 II
给定一个二叉树

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

 

进阶：

你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

 //last是当前遍历的最新一个  nextStart是下一层最开头的那个
let last = null, nextStart = null;
const handle = (p) => {
    if (last !== null) {
        last.next = p;
    } 
    if (nextStart === null) {
        nextStart = p;
    }
    last = p;
}
var connect = function(root) {
    if (root === null) {
        return null;
    }
    let start = root;
    while (start != null) {
        last = null;
        nextStart = null;
        for (let p = start; p !== null; p = p.next) {
            if (p.left !== null) {
                handle(p.left);
            }
            if (p.right !== null) {
                handle(p.right);
            }
        }
        start = nextStart;
    }
    return root;
};