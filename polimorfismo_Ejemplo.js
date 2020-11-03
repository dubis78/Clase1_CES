class Person{
  constructor(name,age){
    this.name =name;
    this.age =age;
  }
  welcome(){
    return "Welcome "+this.name+', you are '+this.age+" years old";
  }
};

class Employee extends Person{
  constructor(name,age,gender){
    super(name,age);
    this.gender =gender;
  }
  welcome(){
    return "Welcome employee "+this.name+', you are '+this.age+` years old and your gender is ${this.gender} `;
  }
};

class Familiar extends Employee{
  constructor(name,age,gender){
    super(name,age)
    this.gender =gender;
  }
  welcomeFamiliar(){
    return "Welcome my familiar "+this.name+', you are '+this.age+" years old"+` and your gender is ${this.gender}`;
  }
};

let myPerson= new Person('Jhon',20);
let myEmployee= new Employee('Bill',25,'M');
let myFamiliar=new Familiar('Elisa',6,'F')

console.log(myPerson.welcome());
console.log(myEmployee.welcome());
console.log(myFamiliar.welcome());