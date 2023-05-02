function getPerson(person){
    try{
        if(typeof person !=="object" || !person.name || !person.age){
            throw new Error("Invalid parameter type");
        }
        return`Name: ${person.name},Age: ${person.age}`;
    }
    catch(error){
        return error.message;
    }
}
const perspn1 ={name :"Manish singh ",age: 19};
const person2 ={ name : "manish"};
const person3 = ["name", "Manish"];
console.log(getPerson(perspn1));
console.log(getPerson(person2));
console.log(getPerson(person3));