/*Cree una función que tome dos argumentos (elemento, tiempos). 
El primer argumento (elemento) es el elemento que necesita repetirse, 
mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. 
Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]*/

let repeat = (elemento, tiempos) => {
    array = [];
    for(let i = 0; i < tiempos; i++){
        array.push(elemento);
    }
    console.log(array);
}

repeat(13,5);