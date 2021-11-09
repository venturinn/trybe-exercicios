//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. 

let a = 1;
let b = 2;

let resultado;

//Adição 

resultado = a + b;
console.log(resultado);

//Subtração 

resultado = a - b;
console.log(resultado);

//Multiplicação 

resultado = a * b;
console.log(resultado);

//Divisão 

resultado = a / b;
console.log(resultado);

//Divisão 

resultado = a % b;
console.log(resultado);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const c = 11;
const d = 11;
const e = 11;


if (c > d) {
    console.log('C= ' + c);
} else if (c < d) {
    console.log('D= ' + d);
} else {
    console.log('Números iguais!');
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.


if (c >= d && c > e) {
    console.log(c);
} else if (c > d && c >= e) {
    console.log(c);
} else if (d >= c && d > e) {
    console.log(d);
} else if (d > c && d >= e) {
    console.log(d);
} else if (e >= c && e > d) {
    console.log(e);
} else if (e > c && e >= d) {
    console.log(e);
} else {
    console.log('Todos iguais!');
}