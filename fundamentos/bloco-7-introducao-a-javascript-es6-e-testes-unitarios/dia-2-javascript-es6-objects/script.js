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

// Parte II:

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