// Example 1:
// Input: 2.00000, 10
// Output: 1024.00000
// Example 2:

// Input: 2.10000, 3
// Output: 9.26100
// Example 3:

// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
// Note:

// -100.0 < x < 100.0
// n is a 32-bit signed integer, within the range [−231, 231 − 1]

var myPow = function(x, n) {
    let isNeg=false;
    if(x<0)
        isNeg=true;
    x=parseFloat(x);
    let res=x;
    if(n==0)
        return 1.0;
    for(let i=0;i<Math.abs(n)-1;i++)
    {
        res*=x;
        if(res==0)
            return 0;
        if(res==1)
        {
            if(isNeg && Math.abs(n)%2!=0)
                return -1;
            else
                return 1;
        }
        if(!isFinite(res))
            return n<0?0:Infinity;
    }
    return n<0?parseFloat((1/res).toFixed(5)):res;
};
