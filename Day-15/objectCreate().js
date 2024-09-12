let personPrototype = {
    greeting:function(){
        console.log("Hello"+this.name);

    }
};

let person1 = Object.create(personPrototype);
person1.name="Raj";
person1.age=22;
console.log(person1.name);
person1.greeting();