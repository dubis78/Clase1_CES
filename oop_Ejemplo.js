//Ejemplo peliculas Netflix
const pelicula1={
  nombre:'Harry Potter 1',
  genero:'Fantasia',
  publicoObj:'jovenes y niños',
  reproducir(){
    return `Estas viendo ${this.nombre} y esta pelicula la disfrutaran principalmente ${this.publicoObj}`    
  }
};

const pelicula2={
  nombre:'Los Vengadores 1',
  genero:'Acción',
  publicoObj:'jovenes y niños',
  reproducir(){
    return `Estas viendo ${this.nombre} y esta pelicula la disfrutaran principalmente ${this.publicoObj}`    
  }
};

console.log(pelicula1.reproducir());
console.log(pelicula2.reproducir());



//=============================================== Usando pklantilla Clase Pelicula
class Pelicula{
  constructor(nombre,genero,publicoObj){
    this.nombre=nombre;
    this.genero=genero;
    this.publicoObj=publicoObj;
  }
  reproducir(){
    return `Estas viendo ${this.nombre}` 
  }
};

const peliculaUno=new Pelicula('Frozen 1','Fantasia','jovenes y niñas');    //instanciar
const peliculaDos=new Pelicula('Los Vengadores 1','Acción','jovenes y niños');


console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
