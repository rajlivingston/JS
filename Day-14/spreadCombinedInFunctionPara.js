function multiply(a,b,...rest){
    return a+b+rest.reduce((acc,curr)=>(acc*curr),1);
}
console.log(multiply(1,2,3,4,5,6,7));