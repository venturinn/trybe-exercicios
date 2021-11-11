// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:


/*
for (let index = 0; index < n; index += 1) {
    linha.push('*');
}
for (let index = 0; index < n; index += 1) {
    console.log(linha);
}
*/

let n = 5;
let linha = '*';


if (n > 1) {
    for (let index = 1; index < n; index += 1) {
        linha = linha + '*';
    }
    for (let index = 0; index < n; index += 1) {
        console.log(linha);
    }
} else {
    console.log('Entrada Menos que 2')
}