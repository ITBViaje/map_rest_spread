//REST
// Su funcionalidad es la de unir distintos elementos a un arreglo. 
//En gral, están en los argumentos de una función.
//SINTAXIS: 
/*function (a,b,...resto){
...
}*/
//Se coloca en el último lugar de los parámetros

function miLista (a, b, ...resto){
    console.log(a);
    console.log(b);
    console.log(resto);
    console.log(resto.length);
    console.log(resto[2]);
}
miLista('pera', 'manzana', 'ananá', 'kiwi', 'limón', 'lima');
