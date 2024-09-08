function person (name,age) {
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log("Good morning" +this.name);
    };
}
let personal = new person("Livingston" +this.name);
console.log(personal);