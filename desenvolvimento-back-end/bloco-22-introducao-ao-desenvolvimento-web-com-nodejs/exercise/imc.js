const { questionInt, questionFloat } = require("readline-sync");

const height = questionInt("Qual a sua altura? ");
const weight = questionFloat("Qual o seu peso? ");

const calcImc = () => {
  return weight / (height ^ 2);
};

console.log("O seu IMC é ", calcImc());
