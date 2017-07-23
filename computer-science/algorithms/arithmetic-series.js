var array1 = []; // Serie de numeros del 1 al 20
for (var i = 1; i <= 100000000; i ++){
    array1.push(i);
}

// Sumar todos los valores de la serie con el método tradicional.

var total = 0;
var start = performance.now();
for (var j=0; j < array1.length; j++){
    total += array1[j];
}
var end = performance.now();
var time = end - start;
console.log(total);
console.log('Time->', time);


// Sumar todos los valores de la serie con la fórmula: n^2/2 + n/2;
var start2 = performance.now();
var total2 = Math.pow(array1.length, 2) / 2 + array1.length / 2;
var end2 = performance.now();
var time2 = end2 - start2;

console.log(total2);
console.log('Time2->', time2);

console.log('Is faster? ->', time2 < time);