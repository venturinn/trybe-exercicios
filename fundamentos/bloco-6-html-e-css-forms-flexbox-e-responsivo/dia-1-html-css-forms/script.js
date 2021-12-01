const select = document.querySelector("#estado");
const estados = [
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
