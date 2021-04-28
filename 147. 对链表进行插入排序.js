/* 147. 对链表进行插入排序
对链表进行插入排序。


插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。

 

插入排序算法：

插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
重复直到所有输入数据插入完为止。 */

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

/* 要排序块，就要尽可能少的做比较
需要一个指针指向当前已排序的最后一个位置，这里用的是head指针
需要另外一个指针pre,每次从表头循环，这里用的是dummy表头指针。
每次拿出未排序的节点，先和前驱比较，如果大于或者等于前驱，就不用排序了，直接进入下一次循环
如果前驱小，则进入内层循环，依次和pre指针比较，插入对应位置即可。 */
var insertionSortList = function(head) {
  let ans = new ListNode(0)
  let pre;
  ans.next = head;
  while(head !== null && head.next !== null){
      if(head.val <= head.next.val){
          head = head.next
          continue
      }
      pre = ans
      while(pre.next.val < head.next.val) pre = pre.next
      const cur = head.next
      head.next = cur.next
      cur.next = pre.next
      pre.next = cur
  }
  return ans.next
};