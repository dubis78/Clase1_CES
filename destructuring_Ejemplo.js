let mascota1={
  nombre:'Orion',
  id:1,
  especie:'Perro',
  saludar(){
    return (`Hola ${this.nombre} con ID: ${this.id}, tu eres un ${this.especie}`)
  }
};


let mascota2={
  nombre:'Spica',
  id:2,
  especie:'Gato',
  saludar(){
    let nombre=this.nombre,id=this.id,especie=this.especie;
    return (`Hola ${nombre} con ID: ${id}, tu eres un ${especie}`)
  }
};


let mascota3={
  nombre:'Antares',
  id:3,
  especie:'Huron',
  saludar(){
    let {nombre,id,especie}=mascota3;
    return (`Hola ${nombre} con ID: ${id}, tu eres un ${especie}`)
  }
};



console.log(mascota1.saludar());
console.log(mascota2.saludar());
console.log(mascota3.saludar());