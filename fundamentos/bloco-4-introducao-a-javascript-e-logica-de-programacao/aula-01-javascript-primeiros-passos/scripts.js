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

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const f = -2;

if (f > 0) {
    console.log('Número Positivo');
} else if (f < 0) {
    console.log('Número Negativo');
} else {
    console.log('Zero');
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const g = 10;
const h = 90;
const i = 80;


if (g > 0 && h > 0 && i > 0) {

    if (g + h + i == 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Ângulos inválidos');
}

/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let nomePeça = 'Rainha';
let nomePeçaLower = nomePeça.toLowerCase();

if (nomePeçaLower === 'rei') {
    console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez');
} else if (nomePeçaLower === 'dama' || nomePeçaLower === 'rainha') {
    console.log('Pode mover-se em qualquer direção (vertical, horizontal e diagonal)quantas casas quiser, porém, desde que estejam livres.');
} else if (nomePeçaLower === 'torre') {
    console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
} else if (nomePeçaLower === 'bispo') {
    console.log('Move-se na diagonal, quantas casas quiser.');
} else if (nomePeçaLower === 'cavalo') {
    console.log('Movimento em ¨L¨, pode saltar sobre as outras peças');
} else if (nomePeçaLower === 'peão') {
    console.log('Não pode retroceder em move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');
} else {
    console.log('Essa peça não existe!')
}

/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let nota = 225;

if (nota < 0 || nota > 100) {

    console.log('Essa nota não existe!!!');
} else if (nota >= 90) {
    console.log('A');
} else if (nota >= 80 && nota < 90) {
    console.log('B');
} else if (nota >= 70 && nota < 80) {
    console.log('c');
} else if (nota >= 60 && nota < 70) {
    console.log('D');
} else if (nota >= 50 && nota < 60) {
    console.log('E');
} else {
    console.log('F');
}

/*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if.*/

const num01 = 10;
const num02 = -20;
const num03 = 16;

if (num01 % 2 == 0 || num02 % 2 == 0 || num03 % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}

/*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if.*/

if (num01 % 2 != 0 || num02 % 2 != 0 || num03 % 2 != 0) {
    console.log(true);
} else {
    console.log(false);
}