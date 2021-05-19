/* 86. 分隔链表
给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if(!head) return head
  let node = head
  const arr = []
  while(node && node.val < x){
      arr.push(node)
      head = head.next
      node.next = null
      node = head
  }
  while(node){
      const n = node.next
      if(n && n.val < x){
          node.next = n.next
          n.next = null
          arr.push(n)
          continue
      }
      node = node.next
  }
  for(let i = arr.length-1; i >= 0; i--){
      arr[i].next = head
      head = arr[i]  
  }
  return head
};
var partition = function(head, x) {
  let small = new ListNode(0);
  const smallHead = small;
  let large = new ListNode(0);
  const largeHead = large;
  while (head !== null) {
      if (head.val < x) {
          small.next = head;
          small = small.next;
      } else {
          large.next = head;
          large = large.next;
      }
      head = head.next;
  }
  large.next = null;
  small.next = largeHead.next;
  return smallHead.next;
};