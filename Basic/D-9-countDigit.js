/*
    Math.floor is used to make decimal number to integers
    Math.abs is used to make negative number to positive
*/ 

function countDigits(n){
    if(n==0) return 1;
    let count=0;
    n=Math.abs(n);
    while(n>0){
        n=Math.floor(n/10);
        count++;
    }
    return count;
}

console.log(countDigits(-234))