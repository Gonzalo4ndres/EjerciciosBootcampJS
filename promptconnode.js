
const prompt = require('prompt-sync')()
 

let variable = "Hola a todes" //Declarando variable mas asignacion 
console.log(variable);//impresión de en consola 

let name = prompt("Ingresa tu nombre: ")

console.log(`El nombre de la persona es: ${name}`)

console.log(typeof name)