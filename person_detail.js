class person{
    constructor(name ='Unknown',age = 0){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return`Name: ${this.name},age: ${this.age}`;
    }
}
const person1 =new person('Manish singh',20);
const person2 = new person();
console.log(person1.getDetails());
console.log(person2.getDetails());