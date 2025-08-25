// Constructor function - crea un objeto con propiedades y métodos
function estudiante(){
    this.nombre = nombre;
    this.rut = rut;
    this.edad = edad;
    this.active = active;
}

const estudiante1 = new estudiante('gonzalo', '12345678-9', 29, true);
console.log(estudiante1);

const estudiante2 = new estudiante('pepe', '98765432-1', 25, false);
console.log(estudiante2);