// Alterar a cor de fundo da página.

function backgroudColor(event) {

    localStorage.setItem('backgroudColor', enter.value);

    if (event.key === 'Enter' || event.type === 'click') {

        if (enter.value === '') {
            alert('Escolha a cor de fundo!');
        } else {
            document.body.style.backgroundColor = enter.value;
        }
    }
}

let add = document.getElementById('background-color-button');
add.addEventListener('click', backgroudColor);

let enter = document.getElementById('background-color');
enter.addEventListener('keypress', backgroudColor);

let backgroudColorMemory = localStorage.getItem('backgroudColor');
document.body.style.backgroundColor = backgroudColorMemory;

// Alterar cor do texto.

function textColor(event) {

    localStorage.setItem('textColor', enter2.value);

    if (event.key === 'Enter' || event.type === 'click') {

        if (enter2.value === '') {
            alert('Escolha a cor do texto!');
        } else {

            mainText[0].style.color = enter2.value;

        }
    }
}

let add2 = document.getElementById('text-color-button');
add2.addEventListener('click', textColor);

let enter2 = document.getElementById('text-color');
enter2.addEventListener('keypress', textColor);

let textColorMemory = localStorage.getItem('textColor');

//Pega o texto para as futuras alterações:
let mainText = document.getElementsByTagName('main');

mainText[0].style.color = textColorMemory;


// Alterar tamanho da fonte.

function fontSize(event) {

    localStorage.setItem('textSize', enter3.value);

    if (event.key === 'Enter' || event.type === 'click') {

        if (enter3.value === '') {
            alert('Escolha o tamanho do texto!');
        } else {

            mainText[0].style.fontSize = enter3.value + 'px';

        }
    }
}

let add3 = document.getElementById('text-size-button');
add3.addEventListener('click', fontSize);

let enter3 = document.getElementById('text-size');
enter3.addEventListener('keypress', fontSize);

let textSizeMemory = localStorage.getItem('textSize');

mainText[0].style.fontSize = textSizeMemory + 'px';

// Alterar espaçamento entre as linhas do texto.

function espacamento(event) {

    localStorage.setItem('espaçamento', enter4.value);

    if (event.key === 'Enter' || event.type === 'click') {

        if (enter4.value === '') {
            alert('Escolha o tamanho do texto!');
        } else {

            mainText[0].style.lineHeight = enter4.value + 'px';

        }
    }
}

let add4 = document.getElementById('entrelinhas-button');
add4.addEventListener('click', espacamento);

let enter4 = document.getElementById('entrelinhas');
enter4.addEventListener('keypress', espacamento);

let espacoMemory = localStorage.getItem('espaçamento');

mainText[0].style.lineHeight = espacoMemory + 'px';


// Alterar tipo da fonte ( Font family ).

function font(event) {

    localStorage.setItem('fonte', enter5.value);

    if (event.key === 'Enter' || event.type === 'click') {

        if (enter5.value === '') {
            alert('Escolha a fonte do texto!');
        } else {

            mainText[0].style.fontFamily = enter5.value;

        }
    }
}

let add5 = document.getElementById('font-button');
add5.addEventListener('click', font);

let enter5 = document.getElementById('font');
enter5.addEventListener('keypress', font);

let fontFamilyMemory = localStorage.getItem('fonte');

mainText[0].style.fontFamily = fontFamilyMemory;