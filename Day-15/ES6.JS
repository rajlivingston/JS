class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hello" +this.name);
    };
}
let person1 = new person(" Raj Livingston",22);
console.log(person1.name);
person1.greet();