class Persona {
  constructor (nombre, edad) {
      this._nombre = nombre;
      this._edad = edad;
  }
      
  showInfo () {
      return "Yo soy " + this._nombre + ", y tengo  " + this._edad + " años";
  }
}

class Empleado extends Persona {
  constructor (nombre, edad, sex) {
      super(nombre,edad);  //super indica que se van usar los atributos heredados y tambien otros definidos solo en la clase hijo
      this._sex = sex;
  }
      
  showInfo(){ //al modificar el metodo heredado de Persona se aplica el Polimorfismo
      return "Yo soy " + this._sex + ", mi nombre es " + this._nombre + ", y tengo " + this._edad +" años";
  }
}

let miPersona = new Persona('Jon', 20);
let miEmpleado = new Empleado('Doe', 10, 'hombre');

console.log(miPersona.showInfo());
console.log(miEmpleado.showInfo());