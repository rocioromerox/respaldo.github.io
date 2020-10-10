/*Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
     { name: "Steve" },
     { name: "Mike" },
     { name: "John" }
]) ➞ ["Becky", "John", "Steve"]*/

array_students = [
     {name: "Steve"},
     {name: "Mike"},
     {name: "John"}]
 
function getStudentsNames(array){
     let array_names = [];
 
     for(let i = 0; i < array.length; i++){
         array_names.push(array[i].name);
     }
 
     return array_names;
}
 
console.log(getStudentsNames(array_students));