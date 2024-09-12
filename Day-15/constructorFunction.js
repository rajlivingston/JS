function person (name,age) {

    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log("Good morning " +this.name);
    };
}
let personal = new person("Livingston" ,21);
console.log(personal.name);