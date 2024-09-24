var a= 10;
var b = 0;

try{
    if(b===0){
        throw("Zero division erors");
    }
    console.log(a / b);
}
catch(r){
    console.error(r);
    
}
