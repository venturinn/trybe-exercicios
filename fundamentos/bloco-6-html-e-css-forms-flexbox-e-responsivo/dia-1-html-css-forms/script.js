const select = document.querySelector("#estado");
const enviar = document.querySelector("#enviar");
const apagar = document.querySelector("#limpar");
const input = document.getElementsByTagName("input");
const estado = document.getElementById("estado");
const moradia1 = document.getElementById("casa");
const moradia2 = document.getElementById("apartamento");
const data = document.getElementById("data");

const cv = document.getElementById("resumo");

const estados = [
  "",
  "Acre - AC",
  "Alagoas - AL",
  "Amapá - AP",
  "Amazonas - AM",
  "Bahia - BA",
  "Ceará - CE",
  "Distrito Federal - DF",
  "Espírito Santo - ES",
  "Goiás - GO",
  "Maranhão - MA",
  "Mato Grosso - MT",
  "Mato Grosso do Sul - MS",
  "Minas Gerais - MG",
  "Pará - PA",
  "Paraíba - PB",
  "Paraná - PR",
  "Pernambuco - PE",
  "Piauí - PI",
  "Roraima - RR",
  "Rondônia - RO",
  "Rio de Janeiro - RJ",
  "Rio Grande do Norte - RN",
  "Rio Grande do Sul - RS",
  "Santa Catarina - SC",
  "São Paulo - SP",
  "Sergipe - SE",
  "Tocantins - TO",
];

function addEstado() {
  for (let i = 0; i < estados.length; i += 1) {
    let newElement = document.createElement("option");
    newElement.innerText = estados[i];
    select.appendChild(newElement);
  }
}

addEstado();

function clear() {
  for (let i = 0; i < input.length; i += 1) {
    input[i].value = "";
  }
  moradia1.checked = false;
  moradia2.checked = false;
  estado.value = "";
  cv.value = "";
}

apagar.addEventListener("click", clear);

function verificarData() {
  let dataValor = data.value;
  let dia = parseInt(dataValor[0] + dataValor[1]);
  let mes = parseInt(dataValor[3] + dataValor[4]);
  let ano = parseInt(dataValor[6] + dataValor[7] + dataValor[8] + dataValor[9]);

  if (dia <= 0 || dia > 31) {
    alert("Esse dia não existe!");
  } else if (mes <= 0 || mes > 12) {
    alert("Esse mês não existe!");
  } else if (mes <= 0 || mes > 12) {
    alert("Esse mês não existe!");
  } else if (ano <= 1890 || ano > 2021) {
    alert("Verifique o ano digitado!");
  }
}

function send(event) {
  event.preventDefault();
  
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === "") {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }
  }
  if (moradia1.checked === false && moradia2.checked === false) {
    alert("Selecione o seu tipo de moradia!");
  } else if (estado.value === "") {
    alert("Selecione o seu estado!");
  } else if (cv.value === "") {
    alert("Preencha o seu CV!");
  } else {
  verificarData();
  }
}

enviar.addEventListener("click", send);
