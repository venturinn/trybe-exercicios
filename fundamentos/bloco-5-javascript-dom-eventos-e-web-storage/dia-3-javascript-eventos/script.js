function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/*
Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysofMonth() {

    const monthDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {

        const days = dezDaysList[index];
        const dayListItem = document.createElement('li');
        dayListItem.className = 'day';
        dayListItem.innerHTML = days;

        if (days === 24 || days === 31) {
            dayListItem.className = 'holyday day';
        } else if (days === 4 || days === 11 || days === 18) {
            dayListItem.className = 'friday day';
        } else if (days === 25) {
            dayListItem.className = 'friday day holyday';
        }
        monthDaysList.appendChild(dayListItem);
    }
}
createDaysofMonth();

/*
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/


function createButton(buttonName) {
    const divButton = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.innerText = buttonName;
    button.id = "btn-holiday";
    divButton.appendChild(button);
}
createButton('Feriados');

/*
Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

function buttonClick() {

    let feriados = document.getElementsByClassName('holyday');

    if (firstClik === true) {
        for (let i = 0; i < feriados.length; i += 1) {
            feriados[i].style.backgroundColor = 'blue';
            firstClik = false;
        }
    } else {
        for (let i = 0; i < feriados.length; i += 1) {
            feriados[i].style.backgroundColor = 'rgb(238,238,238)';
            firstClik = true;
        }
    }
}

let clickButton = document.querySelector('#btn-holiday');
let firstClik = true;

clickButton.addEventListener('click', buttonClick);

/*
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
*/

function createButton2(buttonName) {
    const divButton = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.innerText = buttonName;
    button.id = "btn-friday";
    divButton.appendChild(button);
}
createButton2('Sexta-feira');

/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

function buttonClick2() {

    let feriados = document.getElementsByClassName('friday');

    if (firstClik2 === true) {
        for (let i = 0; i < feriados.length; i += 1) {
            feriados[i].innerText = 'Cerveja!';
            firstClik2 = false;
        }
    } else {
        firstClik2 = true;
        let countDays = 4
        for (let i = 0; i < feriados.length; i += 1) {
            feriados[i].innerText = countDays;
            countDays = countDays + 7;
        }
    }
}

let clickButton2 = document.querySelector('#btn-friday');
let firstClik2 = true;

clickButton2.addEventListener('click', buttonClick2);

/*
Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target .
*/

function zoomIn(number) {
    let who = number.target;
    who.style.fontSize = '40px';
}

let zoomInn = document.querySelectorAll('.day');

for (let i = 0; i < zoomInn.length; i += 1) {
    zoomInn[i].addEventListener('mouseover', zoomIn);
}

function zoomOut(number) {
    let who = number.target;
    who.style.fontSize = '20px';
}

let zoomElement = document.querySelectorAll('.day');

for (let i = 0; i < zoomElement.length; i += 1) {
    zoomElement[i].addEventListener('mouseout', zoomOut);
}

/*
Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/


function addTask(what) {
    const task = document.querySelector('.my-tasks');
    const newTask = document.createElement('span');
    newTask.innerText = what;
    task.appendChild(newTask);
}

addTask('Correr no parque');


/*
Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

function colorTask(what) {
    const task = document.querySelector('.my-tasks');
    const newColor = document.createElement('div');
    newColor.style.backgroundColor = what;
    task.appendChild(newColor);
}

colorTask('lightgreen')

/*
Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/



function select() {

    if (firstClik3 === true) {
        clickButton3[4].className = 'task selected';
        firstClik3 = false;
    } else {
        clickButton3[4].className = '';
        firstClik3 = true;
    }
}

let firstClik3 = true;
let clickButton3 = document.getElementsByTagName('div');
clickButton3[4].addEventListener('click', select);



/*
Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/

let numberWithColor = [];

function set(number) {

    let who = number.target;
    let whoNumber = who.innerText;

    let exist = numberWithColor.indexOf(whoNumber)

    if (exist === -1) {

        if (clickButton3[4].className === 'task selected') {
            who.style.color = clickButton3[4].style.backgroundColor;
            numberWithColor.push(whoNumber);
        } else {
            who.style.color = 'rgb(119, 119, 119)';
        }
    } else if (clickButton3[4].className === 'task selected') {
        who.style.color = 'rgb(119, 119, 119)';
        numberWithColor.splice(exist, 1);
    }
}

let element1 = document.querySelectorAll('.day');

for (let i = 0; i < element1.length; i += 1) {
    element1[i].addEventListener('click', set);
}

/*
Bônus:
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: key .
*/

//id task-imput
//id btn-add
//class task-list

function appointment(event) {


    if (event.key === 'Enter' || event.type === 'click') {

        let imputEnd = document.getElementsByClassName('task-list');
        let imputUser = document.getElementById('task-input');
        let text = document.createElement('li');
        text.innerText = imputUser.value

        if (imputUser.value === '') {
            alert('Você não escreveu nada uai!');
        } else {
            imputEnd[0].appendChild(text);
        }
    }
}

let add = document.getElementById('btn-add');
add.addEventListener('click', appointment);

let enter = document.getElementById('task-input');
enter.addEventListener('keypress', appointment);