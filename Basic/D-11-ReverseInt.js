/*
    I have Noticed this case that if we give input something like 12340 it will produce the output 4321 
    Before Moving on the solution let me tell you that integers does not have any 0 before to the number ex. 0123 if you try to print it will give you the error

    so it will difficult for you to do this process numerically 
    but you can solve this problem by using String DataType
    and also you have to manage all cases which can make little complex
    cases like 
        Negative Numbers

*/

function reverseInt(n){
    let xCopy=n;
    n=Math.abs(n);

    let rev=0;
    while(n>0){
        let rem=n%10;
        rev=(rev*10)+rem;
        n=Math.floor(n/10);
    }
    let limit=Math.pow(2,31); // Another Way 2**31

    if(rev < -limit || rev > limit) return 0;

    if(xCopy%10==0) rev="0"+rev;
    rev=xCopy<0 ? "-"+rev:rev;
    console.log(Math.sign(n));
    return xCopy<0 ? -rev : rev;
}

console.log(reverseInt(-1234))