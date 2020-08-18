//--------------Crear mi clase Pizza "estructura" 

class Pizza{  //vamos a crear nuestra plantilla para los objetos pizza
  constructor(masa,tamano,ingredientes){  //parametros que se reciben
    this.masa=masa;   //asignar cada atributo a su correspondiente parametro
    this.tamano=tamano;
    this.ingredientes=ingredientes;
  }  
  preparar(){
    console.log(`Preparando la pizza ${this.tamano}, ${this.masa} y sus ingredientes son ${this.ingredientes}`);
    return this;
  }
  hornear(){
    console.log(`La pizza se encuentra en el horno...`);
    return this;
  }
  empacar(){
    console.log(`Empacando la pizza...`);
    console.log(`Pizza lista para ser enviada.`);
    return this;

    // return(console.log(`Empacando la pizza...`),
    // console.log(`Pizza lista para ser enviada.`)
    // )

  }
}


//----------Instaciar objeto  "cración de objeto" pizzaHawaina
const pizzaHawaina = new Pizza('Masa gruesa','Mediana',['Queso','Piña','Jamón']);

console.log(pizzaHawaina.preparar());
console.log(pizzaHawaina.hornear());
console.log(pizzaHawaina.empacar());

//----------Instaciar objeto  "cración de objeto" pizzaPolloChampiñones
const pizzaPolloChampinones = new Pizza('Masa delgada','Grande',['Queso','Pollo','Champiñones']);

console.log(pizzaPolloChampinones.preparar());
console.log(pizzaPolloChampinones.hornear());
console.log(pizzaPolloChampinones.empacar());