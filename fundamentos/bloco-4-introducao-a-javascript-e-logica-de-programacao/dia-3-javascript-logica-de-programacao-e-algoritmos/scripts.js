// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

/*
for (let index = 0; index < n; index += 1) {
    linha.push('*');
}
for (let index = 0; index < n; index += 1) {
    console.log(linha);
}
*/

console.log("Exercício 01:");

let n = 5;
let linha = "*";

if (n > 1) {
  for (let index = 1; index < n; index += 1) {
    linha = linha + "*";
  }
  for (let index = 0; index < n; index += 1) {
    console.log(linha);
  }
} else {
  console.log("Entrada Menos que 2");
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

console.log("Exercício 02:");

let n2 = 5;
let linha2 = "*";

if (n2 > 1) {
  for (let index = 0; index < n2; index += 1) {
    console.log(linha2);
    linha2 = linha2 + "*";
  }
} else {
  console.log("Entrada Menos que 2");
}

// 3- Agora inverta o lado do triângulo.

console.log("Exercício 03:");

let n3 = 5;
let linha3 = "";
let contador = 0;

if (n2 > 1) {
  for (let index01 = 0; index01 < n3; index01 += 1) {
    linha3 = "";
    contador = contador + 1;
    for (let index02 = n3; index02 > 0; index02 -= 1) {
      if (index02 <= contador) {
        linha3 = linha3 + "*";
      } else {
        linha3 = linha3 + " ";
      }
    }
    console.log(linha3);
  }
} else {
  console.log("Entrada Menos que 2");
}

// 4- Depois, faça uma pirâmide com n asteriscos de base:



function nPar(n) {
    let linha4 = [];
    let central01 = n / 2 ;
    let central02 = central01 + 1;
  
    let lateralCentral = 0;
  
  for(let i = 0;i<n; i+=1 ){
      linha4.push(' '); 
  }
  
    for (let contadorLinhas = 0; contadorLinhas < central01; contadorLinhas += 1) { // Desenvolve as linhas 
  
      for (let i = n; i > 0; i -= 1) { // Desenvolve os elementos de cada linha
        if (i === central01 || i === central02 || i === central01 - lateralCentral || i === central02 + lateralCentral) {
          linha4[(i-1)]= "*";
        } else if (linha4[(i-1)] !== '*') {
          linha4[(i-1)] = " ";
        }
      }
  
      console.log(linha4.join(''));
      lateralCentral += 1;
    }

}


function nImpar(n) {
  let linha4 = [];
  let central = n / 2 + 0.5;

  let lateralCentral = 0;

for(let i = 0;i<n; i+=1 ){
    linha4.push(' '); 
}

  for (let contadorLinhas = 0; contadorLinhas < central; contadorLinhas += 1) { // Desenvolve as linhas 

    for (let i = n; i > 0; i -= 1) { // Desenvolve os elementos de cada linha
      if (i === central || i === central - lateralCentral || i === central + lateralCentral) {
        linha4[(i-1)]= "*";
      } else if (linha4[(i-1)] !== '*') {
        linha4[(i-1)] = " ";
      }
    }

    console.log(linha4.join(''));
    lateralCentral += 1;
  }
}

function desafio04(n) {
  console.log("Exercício 04:");

  if (n%2 === 0){

nPar(n);

  }else{

nImpar(n);
  }

}

desafio04(10);
