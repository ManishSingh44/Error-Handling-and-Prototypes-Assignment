class car{
    constructor(company,mobel,year){
        this.company =company;
        this.mobel = mobel;
        this.year =year;
    }
    getDescription(){
        return `this is a ${this.year} ${this.mobel} ${
            this.company}`;
    }
}
const mycar =new car('skoda','Rapid',2023);
console.log(mycar.getDescription());