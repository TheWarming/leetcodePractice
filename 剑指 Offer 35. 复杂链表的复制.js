/* 剑指 Offer 35. 复杂链表的复制
请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

 

示例 1：



输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]] */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if(head === null) return null;
  let cur = head;
  const map = new Map();
  // 3. 复制各节点，并建立 “原节点 -> 新节点” 的 Map 映射
  while(cur !== null) {
      map.set(cur, new Node(cur.val));
      cur = cur.next;
  }
  cur = head;
  // 4. 构建新链表的 next 和 random 指向
  while(cur !== null) {
      if(cur.next){
          map.get(cur).next = map.get(cur.next);
      }
      if(cur.random){
          map.get(cur).random = map.get(cur.random);
      }
      cur = cur.next;
  }
  // 5. 返回新链表的头节点
  return map.get(head);
};

/* 哈希的做法，在大多数公司的面试官面前并不是一个满意的答案，所以需要知道原地修改的解法才能够从容面对面试。 原地修改解法流程：

复制一个新的节点在原有节点之后，如 1 -> 2 -> 3 -> null 复制完就是 1 -> 1 -> 2 -> 2 -> 3 - > 3 -> null
从头开始遍历链表，通过 cur.next.random = cur.random.next 可以将复制节点的随机指针串起来，当然需要判断 cur.random 是否存在
将复制完的链表一分为二 根据以上信息，我们不难写出以下代码 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (head === null) {
  return head;
  }
  // 完成链表节点的复制  1 -> 1 -> 2 -> 2
  let cur = head;
  while (cur !== null) {
  const copyNode = new Node(cur.val);
  copyNode.next = cur.next;
  cur.next = copyNode;
  cur = cur.next.next;
  }

  // 完成链表复制节点的随机指针复制
  cur = head;
  while (cur !== null) {
  if (cur.random !== null) { // 注意判断原来的节点有没有random指针
      cur.next.random = cur.random.next;
  }
  cur = cur.next.next;
  }

  // 将链表一分为二
  const copyHead = head.next;
  cur = head;
  let curCopy = head.next;
  while (cur !== null) {
  cur.next = cur.next.next;
  cur = cur.next;
  if (curCopy.next !== null) {
      curCopy.next = curCopy.next.next;
      curCopy = curCopy.next;
    }
  }
  return copyHead;
};