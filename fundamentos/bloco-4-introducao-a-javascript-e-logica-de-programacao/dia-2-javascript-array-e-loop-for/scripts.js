let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let somaArray = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaArray = somaArray + numbers[index];
}
console.log(somaArray);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaArray = (somaArray / numbers.length)

console.log(mediaArray);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaArray > 20) {
    console.log('Vamor maior do que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;