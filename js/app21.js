/* Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: 
"¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"*/

let funcion_texto = texto => {
    troceado = texto.split(" ")
    valor = 0;
    for(let i = 0; i < troceado.length; i++){
        if(troceado[i] === "Nemo" || troceado[i] ==="Nemo"){
            valor = i + 1;
        }
    }
    return console.log(`¡Encontré a Nemo en la palabra ${valor}!`);
}

funcion_texto("Hola, soy el maravilloso Nemo nadador");