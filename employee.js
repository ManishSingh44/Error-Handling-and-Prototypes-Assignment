class employee{
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this. salary= salary;

    }
    getsalary(){
    return this.salary
}}
const manish = new employee('Manish','CEO',100000);
console.log(manish.getsalary());