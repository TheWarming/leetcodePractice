/* 328. 奇偶链表
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

示例 1:

输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head === null || head.next === null) {
      return head;
  }
  // head 为奇链表头结点，o 为奇链表尾节点
  let o = head;
  // p 为偶链表头结点
  const p = head.next;
  // e 为偶链表尾节点
  let e = p;
  while (o.next !== null && e.next !== null) {
      o.next = e.next;
      o = o.next;
      e.next = o.next;
      e = e.next;
  }
  o.next = p;
  return head;
};