/*Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]*/

let filtro = array => {
    nuevo_array = []
    for(let i = 0; i < array.length; i++){
        if(Number.isInteger(array[i])){
            nuevo_array.push(array[i]);
        }
    }
    return nuevo_array;
}

array_matriz = [1, "x", 2, 3, "y", 10];
console.log(filtro(array_matriz));