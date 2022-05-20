// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  if(Array.isArray(array)){  //comprueba si es array
    if(array.filter(e => typeof e !== "number").length === 0){ //comprueba si el array es entero con Array.prototype.filter
      return array.map(e => e +1); //aumentar cada elemento por 1 y devolver
    }
  }
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
} 


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if(array.includes( elemento)){
    return true;
  }else{
    return false;
  }
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma = 0;
 for(i = 0; i<numeros.length; i++){
   suma += numeros[i];

 }
 return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0;
  for(var i = 0; i<resultadosTest.length; i++){
    promedio = promedio + resultadosTest[i];
  }
  return promedio / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código: 
 return Math.max(...numeros);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicados = 1;
  if(arguments.length < 1){
    return 0; 
  } else if (arguments.length > 0){
    for(let i=0;i<arguments.length;i++){
      multiplicados *= arguments[i];
    }
      return multiplicados;
  }
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for(let i=0; i<arreglo.length;i++){
     if(arreglo[i]>18){
        contador ++;
      }
  }
  return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  var array = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
  if(array[numeroDeDia-1] === 'Domingo' || array[numeroDeDia-1] === 'Sabado'){
    return "Es fin de semana";
  }else{
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  numero = n +"";

  return numero[0] === '9';
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  const valor = arreglo[0];

  for(let i=0; i<arreglo.length; i++){
    if(arreglo[i] !== valor){
      return false;
    }
  }

  return true;

} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código
  let mesesEncontrados = [];
  // mes === array[i]
  array.forEach(mes => {//pasa mes por mes 
    if(mes === 'Enero' || mes === 'Marzo' || mes === 'Noviembre'){  //checar que mes sea enero marzo o noviembre
      mesesEncontrados.push(mes); //agrega el mes al nuevo arreglo
    }
  });
    if(mesesEncontrados.length<3){ //si el numero de meses es menos que 3
      return 'No se encontraron los meses pedidos'; //regresa que no son los meses pedidos
    } 
    return mesesEncontrados; //regresa los meses agregados 
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  array.forEach(numeros =>{
    if(numeros>100){
      nuevoArray.push(numeros);
    }
  });
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let nuevoArray = [];
  let suma = numero;
  for(let i = 0; i < 10; i++){
    suma = suma + 2;    //incrementa en 2 el numero pasado en "numero"
    if(suma === i){        //ahora compara si la suma anterior es igual a l numero de la iteracion, corta la ejecucion                                                                                                                                                                    
      break;
    }else{ //si no, agrega la suma al nuevo array
      nuevoArray.push(suma);
    }
  }
  if(nuevoArray.length < 10){ //si el tamaño del arreglo es menor, significa que se interrumpio la ejecucion en algun momento
    return "Se interrumpió la ejecución";
  }else if(nuevoArray.length === 10){ //si no, devuelve el arreglo completo
    return nuevoArray;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  nuevoArray = [];
  suma = numero;
  for(let i = 0; i < 10; i++){
    if(i === 5){
      continue;
    }else {
      suma = suma + 2;
      nuevoArray.push(suma);
    }
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
