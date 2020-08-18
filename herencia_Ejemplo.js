//Caso Netflix
class Contenido_Netflix{   //clase padre
  constructor(nombre,duracion){
    this.nombre=nombre;
    this.duracion=duracion;
  }
  reproducir(){
    return `Estas viendo ${this.nombre} y tiene una duración de: ${this.duracion}`;    
  }
}

class Pelicula extends Contenido_Netflix{      //extends=hereda de 
  reproducirPelicula(){
    return `Estas viendo la pelicula ${this.nombre} y tiene una duración de: ${this.duracion}`;
  }
}  

class Serie extends Contenido_Netflix{      //extends=hereda de 
  reproducirSerie(){
    return `Estas viendo la serie ${this.nombre}  y tiene una duración de: ${this.duracion}`;
  }
}  

//---------------Instanciar---------------------
const peliculaUno=new Pelicula('Matrix 1','2 horas y 34 minutos');
const peliculaDos=new Pelicula('Frozen 1','1 hora y 45 minutos');
const serieUno=new Serie('Dark','45 minutos');

console.log(peliculaDos.reproducirPelicula());
console.log(peliculaDos.reproducir()); //Al poder acceder al metodo reproducir se comprueba que efectivamente se hereda de la clase padre
console.log(peliculaUno.reproducirPelicula());
console.log(serieUno.reproducirPelicula());   //este no muestra nada en consola porque no existe el metodo reproducirPelicula en la clase Serie
console.log(serieUno.reproducirSerie()); 