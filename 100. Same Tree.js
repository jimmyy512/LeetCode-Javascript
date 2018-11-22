Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var find=function(node,array){
    if(!node)
        return;
    array.push(node);
    find(node.left,array);
    find(node.right,array);
}

var isSameTree = function(p, q) {
    let first=[];
    let second=[];
    find(p,first);
    find(q,second);
    return JSON.stringify(first)===JSON.stringify(second);
};



//遞迴版本
var find=function(left,right){
    if((left==null && right!=null) ||
       (left!=null && right==null))
        return false;

    if(left==null && right==null)
        return true;
    
    if(left.val!=right.val)
        return false;
    
    return find(left.left,right.left) && find(left.right,right.right);
}

var isSameTree = function(p, q) {
    return find(p,q);
};
