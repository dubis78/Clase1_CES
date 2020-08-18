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
    console.log(`la pizza se encuentra en el horno...`);
    return this;
  }
  empacar(){
    console.log(`Empacando la pizza...`);
    console.log(`Pizza lista para ser enviada.`);
    return this;
  }
}

class Combos extends Pizza{
    constructor(masa,tamano,ingredientes,combo,bebida,postre){
        super(masa,tamano,ingredientes);   //con super indico que voy a usar los parametros heredados
        this.combo=combo;
        this.bebida=bebida;
        this.postre=postre;          
    }
    elegirCombo(){
      this.preparar();
      this.hornear();
      this.empacar();
      console.log(`Pedido: Combo ${this.combo} - Pizza ${this.tamano}, ${this.masa}, ${this.ingredientes} + ${this.bebida} + ${this.postre}`);
      return this;
    }      
}

const pedido1=new Combos('Mediana','Masa de la casa',['Queso','Peperoni','Aguacate'],'Personal','cocacola grande','Rollitos de canela');
console.log(pedido1.elegirCombo());