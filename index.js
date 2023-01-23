const prompt = require('prompt');

prompt.start();

prompt.get(['nombre'], function (err, result){
    console.log('¿Cuál es tu nombre?');
    console.log('Tu nombre es: ' + result.nombre);

});



















// let a = 'Ariel';
// console.log(a);
// console.log(typeof(a))


// b = 'hola'
// c = ' mundo'
// d = 8
// d += d + 2
// console.log(d)
// console.log(b + c);