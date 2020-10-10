/*Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"*/

let funcion_texto = texto => texto.charAt(texto.length-1).toUpperCase();

console.log(funcion_texto("hello"));