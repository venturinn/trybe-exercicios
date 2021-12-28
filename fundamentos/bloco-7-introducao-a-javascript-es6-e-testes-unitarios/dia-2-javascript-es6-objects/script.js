// Parte II

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

//Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {

const deliveryPerson = order.order.delivery.deliveryPerson;
const name = order.name;
const tel = order.phoneNumber;
const street = order.address.street;
const number = order.address.number;
const apt = order.address.apartment;

console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${tel}, R. ${street}, Nº: ${number}, AP: ${apt}`)

}

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {

order.name = 'Luiz Silva'
const name = order.name;
const pizzas = Object.keys(order.order.pizza);
const drinks = order.order.drinks.coke.type;
order.payment.total = 'R$50,00';
const total = order.payment.total;

console.log(`Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é ${total}`)
}

orderModifier(order);

// Parte III:

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function turnoModifier (object, key, value){
let objeto = object;
let chave = key;
let valor = value;
objeto[chave] = valor;
console.log(objeto);
}

turnoModifier (lesson2, 'turno', 'noite');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function keyList(object){
console.log(Object.keys(object));
}

keyList(lesson1);

// Solução com Arrow Function:

const keysList = (object) => Object.keys(object);
console.log(keysList(lesson2));

// Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (obj) => Object.keys(obj).length;
console.log(objectLength(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valueList = (object) => Object.values(object);
console.log(valueList(lesson2));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

let allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

// Minha solução:

const numberStudents = (obj) => {
let lesson1 = obj.lesson1.numeroEstudantes;
let lesson2 = obj.lesson2.numeroEstudantes;
let lesson3 = obj.lesson3.numeroEstudantes;
return lesson1 + lesson2 + lesson3;
}
console.log(numberStudents(allLessons));

// Solução do gabarito 

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);

  for(index in array){
  total += obj[array[index]].numeroEstudantes;
  }
  return total;
};

console.log(getNumberOfStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const position = (obj, position) => {
return Object.values(obj)[position];
}

console.log(position(lesson1, 0))

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

// Minha solução:

const verifyPair = (obj, key, value) => {

if (obj[key] === value){
return true;
}else{
return false;
}

}

console.log(verifyPair(lesson1, 'materia', 'Matemática'));

// Solução do gabarito:

const verifyPair2 = (obj, key, value) => {
  const arr = Object.entries(obj);

  console.log(arr);

  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair2(lesson2,'professor','Carlos'));

// Bônus
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

console.log('__________________________________________________________________________')

const verifyMathStudents = (obj, aula) => {

  let total = 0;
  const arr = Object.keys(obj);

  console.log(obj);
  console.log(arr);

  for(index in arr){
    if ( obj[arr[index]].materia === aula){
    total += obj[arr[index]].numeroEstudantes;
    }
  }

  return total;
};

console.log(verifyMathStudents(allLessons, 'Matemática'));

console.log('__________________________________________________________________________')

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (obj, teacher) => {

let totalStudents = 0;
let aulas = [];

const arr = Object.keys(obj);

  for(index in arr){
    if ( obj[arr[index]].professor === teacher){
    totalStudents += obj[arr[index]].numeroEstudantes;
    aulas.push(obj[arr[index]].materia);
    }
  }

let report = {
  professor: teacher,
  aulas: aulas,
  estudantes: totalStudents
};

  return report;
}

console.log(createReport(allLessons, 'Maria Clara'))