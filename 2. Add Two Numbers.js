// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1=[];
    let num2=[];
    let point1=l1;
    let point2=l2;
    do{
        if(point1!=null)
        {
            num1.push(point1.val);
            point1=point1.next;
        }
        else
            num1.push(0);
        
        if(point2!=null)
        {
            num2.push(point2.val);
            point2=point2.next;
        }
        else
            num2.push(0);
    }while(point1!=null || point2!=null);
    num1=num1.reverse();
    num2=num2.reverse();
    
    let maxLength=num1.length>num2.length?num1.length:num2.length;
    let res=new Array(maxLength).fill(0);
    for(let i=maxLength-1;i>=0;i--)
    {
        res[i]+=num1[i]+num2[i];
        if(res[i]>=10)
        {
            if(i-1>=0)
            {
                res[i-1]++;
                res[i]-=10;
            }
            else
            {
                res[i]-=10;
                res.unshift(1);
            }
        }
    }
    return res.reverse();
};