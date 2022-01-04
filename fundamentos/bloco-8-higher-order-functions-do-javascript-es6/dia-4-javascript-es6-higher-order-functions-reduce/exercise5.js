// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

// Minha solução:

function containsA() {
  return names.reduce((acc, curr) => {
    for (let index = 0; index < curr.length; index += 1) {
      if (curr[index] === "a" || curr[index] === "A") {
        acc += 1;
      }
    }
    return acc;
  }, 0);
}

console.log(containsA());

//Solução gabarito Trybe:

function containsA2() {
  return names.reduce(
    (acc, curr) =>
      acc +
      curr.split("").reduce((acumulator, current) => {
        if (current === "a" || current === "A") return acumulator + 1;
        return acumulator;
      }, 0),
    0
  );
}

console.log(containsA2());
