//Zapatillas

class Zapatilla { 
    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.age = 0;
    }

    //se define un método para mostrar la información de la zapatilla
    getInfo(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}`;
    }
    // getter para obtener la edad de la zapatilla
    getAge(){
        return this.age;
    }
    // setter para actualizar la edad de la zapatilla
    setAge(age){
        this.age = age;
    }

    
}
//instancia de la clase Zapatilla
const zapatilla1 = new Zapatilla('Nike', 'Air Max', 'Rojo');
const zapatilla2 = new Zapatilla('Adidas', 'Ultraboost', 'Negro');

// cambiamos edad de zapatilla
zapatilla1.setAge (2000);

console.log(zapatilla1);
console.log('Edad de zapatilla1: ',zapatilla1.getAge());