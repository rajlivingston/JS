function createPerson (name,age){
    return {
        name : name,
        age : age,
        greet : function(){
            console.log("Hello"+ this.name);
        }
    };
}