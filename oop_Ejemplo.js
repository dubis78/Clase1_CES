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
  constructor(_nombre,_genero,_publicoObj){
    this.nombre=_nombre;
    this.genero=_genero;
    this.publicoObj=_publicoObj;
  }
  reproducir(){
    return `Estas viendo ${this.nombre} y esta pelicula la disfrutaran principalmente ${this.publicoObj}` 
  }
};

const peliculaUno=new Pelicula('Harry Portter 1','Fantasia','jovenes y niños'); //instanciar
const peliculaDos=new Pelicula('Los Vengadores 1','Acción','jovenes y niños');
const peliculaTres=new Pelicula('Frozen 1','Fantasia','jovenes y niñas');

console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(peliculaTres.reproducir());
