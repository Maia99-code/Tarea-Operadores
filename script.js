// Tarea - Operadores
// Instrucciones
// Para practicar los conceptos aprendidos, vamos a aplicarlos en un pequeño programa para conocer si el mayor de una serie de numeros.

// La tarea
// Dadas las siguientes tres variables, escribí un programa que imprima en la consola cual es el número más grande.

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;



// como solucion a la tarea se compararan las tres variables y se determinara a la variable mas grande 
// utilizando if else


let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num1 >= num2 && num1 >= num3) {
    console.log("El número más grande es: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("El número más grande es: " + num2);
} else {
    console.log("El número más grande es: " + num3);
}




