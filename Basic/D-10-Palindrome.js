function reverseNo(n){
    if(n < 0) return false;
    let temp=n;
    let rev=0;
    while(n>0){
        rem=n%10;
        rev=(rev*10)+rem;
        n=Math.floor(n/10);
    }
    
    return rev===temp;
}

console.log(reverseNo(121))