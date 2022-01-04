// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.

// Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  // Solução do gabarito da Trybe, a função concat era desconhecida por mim!
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten());
