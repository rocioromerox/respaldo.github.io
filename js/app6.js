/*Cree una función que tome una matriz de números y devuelva los números mínimos y
máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]*/

function minMax(array){
    let max_valor = array[0];
    let min_valor = array[0];
    let medida = array.length

    for(let i = 1; i < medida; i++){
        let valor_actual = array[i];
        if(valor_actual > max_valor){
            max_valor = valor_actual;
        }
    }
    
    for(let i = 1; i < medida; i++){
        let valor = array[i];
        if(min_valor > valor){
            min_valor = valor;
        } 
    }

    let text = console.log(`${min_valor}, ${max_valor}`);
    return text;   
}

array_matriz = [1,2,3,4,5];

console.log(minMax(array_matriz));