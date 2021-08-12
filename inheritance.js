class Parent {
    constructor(){
        this.father = "schwernegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullname(){
        return this.name + " " + this.father;
    }
}

const baby = new Child("arnold");
const baby2 = new Child("tom");
console.log(baby.getFullname());
console.log(baby2);