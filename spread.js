//Spread Operator: corresponde a un operador
//el cuál distribuye los elementos de un arreglo u objeto,
//para asignarlos a alguna variable/constante/función.
//SINTAXIS:
//Para arrays o cadenas vamos a utilizar corchetes y el operador que 
//va con tres puntos.
//[...objetoIterable, 'a', 'loquesea', 8];

//Para llamadas a funciones
//myFunction(...objetoIterable);

//Para objetos trabajamos con las llaves.
//let objClone = {...obj};

console.log(Math.max(7,2,9,5))

//Podemos pensar que es como crear un array de valores y 
//colocar esos cuatro valores.
let array = [7, 2, 9, 6];
console.log(Math.max(array))
//Entonces lo que si podemos hacer es utilizar el operador
//SPREAD y convertir ese array en valores sueltos.
console.log(Math.max(...array));
//Puedo usar esta función para saber el máximo de dos arrays
//Entonces defino otro array;
let array1 = [4, 6, 9];
console.log(Math.max(...array, ...array1, 11));

console.log(Math.min(...array, ...array1, 11));

//concatenar dos arrays
console.log(...array1, ...array);
let arrayResultado = [...array, ...array1];
console.log(arrayResultado);

//Copiar un array en otro array
let array2 = [7, 8, 6, 2, 0];

let copiaArray2 = [...array2];
console.log(copiaArray2)

let copiaA2 = array2;
console.log(copiaA2)

copiaA2[0]= 5;
console.log(array2);
console.log(copiaA2);
console.log(copiaArray2)

//Cadenas.
let saludo = 'Hola, ¿Cómo están?'
console.log(...saludo);

//FUNCIONES
function suma(a, b, c){
    return a + b + c;
}
let array3 = [6, 5, 4];
console.log(suma(array3));
console.log(suma(...array3));

//OBJETOS
let persona = {
    nombre: 'Lucas',
    username: 'ABC123',
}
let persona1 = {
    nombre: 'Fede',
    username: 'ABC456',
}
//Si quiero copiar un objeto en otro:
let clonPersona = {...persona}//es una copia de persona.
let unionPersonaPersona1 = {...persona, ...persona1}
//Si tienen el mismo nombre las propiedades, las sobreescribe. 
//La forma de solucionar es que las propiedades no tengan el mismo nombre.
console.log(unionPersonaPersona1)

//LA FUNCIONALIDAD DEL OPERADOR SPREAD O LA PROPIEDAD EXTENDIDA
//ES POTENTE PORQUE SE PUEDE TRABAJAR CON ARRAYS, CON
//CADENAS Y CON OBJETOS TAL COMO VIMOS, PERMITIENDO GENERAR
//OBJETOS INDEPENDIENTES PARA PASARLOS A FUNCIONES TAL COMO VIMOS.