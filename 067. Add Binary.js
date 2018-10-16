Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry=0;
    let length=Math.max(a.length,b.length);
    a=a.split("").reverse().join("");
    b=b.split("").reverse().join("");
    let res="";
    for(let i=0;i<length;i++)
    {
        let sum=parseInt((a[i] || 0)) + parseInt((b[i] || 0)) + carry;
        if(sum>1)
        {
            if(sum==3)
                sum=1;
            else
                sum=0;
            carry=1;
        }
        else
            carry=0;
        res=sum+res;
    }
    if(carry==1)
        res='1'+res;
    return res;
};
