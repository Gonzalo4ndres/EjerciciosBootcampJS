// Objetos literales 
const student = {
    name: 'Gonzalinho',
    age: 29,
    active: true,
    saludos: function(){
        return 'Hola, mi nombre es ' + this.name + ' y tengo ' + this.age + ' años.';
    }
};
//notacion de puntos 
console.log(student.saludos()); 

console.log (Math.PI);

Math.trunc(4.9); // redondea hacia abajo     