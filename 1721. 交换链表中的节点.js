/* 1721. 交换链表中的节点
给你链表的头节点 head 和一个整数 k 。

交换 链表正数第 k 个节点和倒数第 k 个节点的值后，返回链表的头节点（链表 从 1 开始索引）。

 

示例 1：


输入：head = [1,2,3,4,5], k = 2
输出：[1,4,3,2,5] */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 //是交换值不是交换节点啊！
var swapNodes = function(head, k) {
  if(!head) return head
  let len = 0
  let node = head
  let n1 = null
  let n1p = null
  let n2 = null
  let n2p = null
  while(node){
      if(k === 1 && n1 === null){
          n1 = node
      }
      len++
      if(k === len + 1){
          n1p = node
          n1 = node.next
      }
      node = node.next
  }
  const count = len - k + 1
  len = 0
  node = head
  while(node){
      if(count === 1){
          n2 = node
          break
      }
      len++
      if(count === len + 1){
          n2p = node
          n2 = node.next
          break
      }
      node = node.next
  }
  if(count === k) return head
  if(k === count + 1 || k === count - 1){
      let a = n1;
      let b = n2;
      let pre = n1p
      if(k > count){
          a = n2
          b = n1
          pre = n2p
      }
      a.next = b.next
      b.next = a
      if(pre){
          pre.next = b
      }
  }else{
      [n1.next,n2.next] = [n2.next,n1.next]
      if(n1p){
          n1p.next = n2
      }
      if(n2p){
          n2p.next = n1
      }
  }
  if(k === 1) return n2
  if(count === 1) return n1
  return head
};

function helper(head){
  let fast = head;
  for(let i = 1 ; i < k ; i++){
      fast = fast.next;
  }
  const temp = fast;
  let slow = head;
  while(fast.next){
      fast = fast.next;
      slow = slow.next;
  }
  [slow.val,temp.val] = [temp.val,slow.val]
  return head;
}