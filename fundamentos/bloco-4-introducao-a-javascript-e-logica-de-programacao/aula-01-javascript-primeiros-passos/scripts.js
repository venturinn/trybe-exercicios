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

/*Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

const valorCompra = 50;
const valorVenda = 61;

let custo = (valorCompra * 1.2);

if (valorCompra < 0 || valorVenda < 0) {
    console.log('Valores Negativos');
} else {
    console.log((1000 * valorVenda) - (1000 * custo));
}

/*Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?*/

let salary = 3000;

let inss8 = 0.08;
let inss9 = 0.09;
let inss11 = 0.11;

let salaryInss8 = 0;
let salaryInss9 = 0;
let salaryInss11 = 0;
let salaryInssMax = 0;


// Descobrir alíquota INSS:

if (salary <= 1556.95 && salary > 0) {
    salaryInss8 = salary - (salary * inss8);
} else if (salary >= 1556.95 && salary <= 2594.92) {
    salaryInss9 = salary - (salary * inss9);
} else if (salary >= 2594.93 && salary <= 5189.82) {
    salaryInss11 = salary - (salary * inss11);
} else if (salary > 5189.82) {
    salaryInssMax = salary - 570.88;
} else {
    console.log('Você não paga para trabalhar!')
}

let salaryInss;

if (salaryInss8 != 0) {
    salaryInss = salaryInss8;
} else if (salaryInss9 != 0) {
    salaryInss = salaryInss9;
} else if (salaryInss11 != 0) {
    salaryInss = salaryInss11;
} else if (salaryInssMax != 0) {
    salaryInss = salaryInssMax;
} else {
    console.log('O cálculo de desconto de INSS não foi realizado')
}


// Descobrir alíquota IR:

if (salaryInss < 1903.98 && salaryInss > 0) {
    console.log('IR = 0% || Salário Líquido= ' + salaryInss);
} else if (salaryInss >= 1903.99 && salaryInss <= 2826.65) {
    console.log('IR = 7,5% || Salário Líquido= ' + (salaryInss - (salaryInss * 0.075) + 142.80));
} else if (salaryInss >= 2826.66 && salaryInss <= 3751.05) {
    console.log('IR = 15% || Salário Líquido= ' + (salaryInss - (salaryInss * 0.15) + 354.80));
} else if (salaryInss >= 3751.06 && salaryInss <= 4664.68) {
    console.log('IR = 22,5% || Salário Líquido= ' + (salaryInss - (salaryInss * 0.225) + 636.13));
} else if (salaryInss > 4664.68) {
    console.log('IR = 27,5% || Salário Líquido= ' + (salaryInss - (salaryInss * 0.275) + 869.36));
} else {
    console.log('Você não paga para trabalhar!')
}