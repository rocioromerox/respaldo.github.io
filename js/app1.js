/*Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”*/

function setName(name="Sebastián", lastname="Yabiku", age=33) {
    return `Hola, mi nombre es ${name} ${lastname} y mi edad ${age}.`
}

console.log(setName());


