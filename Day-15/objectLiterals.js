let person = {
    name : " Raj Livingston ",
    age : 22,
    hello : function(){
        console.log("Hello" + this .name);
    }
};

console.log(person.name);
person.hello();
