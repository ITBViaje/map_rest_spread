//
const arreglo = new Array(100);
arreglo.push(5);
console.log(arreglo);
//Es raro que lo utilicemos, pero es importante
//saber que existe.
const arreglo1 = [1, 5, 6, 8];
const arreglo2 = [...arreglo1, 9];
const arreglo3 = arreglo2.map(function(x){
return x * 2;
});
console.log(arreglo3);
const arreglo5 = arreglo2.map ((y)  => (y + 1));
console.log(arreglo5)

//Si abrimos un arreglo vemos que en su prototype hay muchos métodos y propiedades
//uno de ellos es el map.
//Si vamos a la documentación oficial nos dice que crea un nuevo arreglo con
//los resultados de la llamada a la función indicada y aplicados a cada uno de sus elementos.
const arreglo4 = arreglo1.map((x)=> x+=1);
console.log(arreglo4);