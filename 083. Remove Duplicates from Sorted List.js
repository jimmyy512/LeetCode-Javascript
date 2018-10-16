Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let point=new ListNode(0);
    let res=point;
    let curNum=null;
    while(head)
    {
        if(curNum!=head.val)
        {
            curNum=head.val;
            point.next=new ListNode(curNum);
            point=point.next;
        }
        head=head.next;
    }
    return res.next;
};
