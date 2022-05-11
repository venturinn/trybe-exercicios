// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no
// formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require("fs").promises;

const nomeDoArquivo = "simpsons.json";

const main = async () => {
  await fs
    .readFile(nomeDoArquivo, "utf8")
    .then((data) => {
      const simpsons = JSON.parse(data);
      simpsons.forEach((element) => {
        console.log(`${element.id} - ${element.name}`);
      });
    })
    .catch((err) => {
      console.error(
        `Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`
      );
      process.exit(1);
    });
};

main();

// Crie uma função que receba o id de uma personagem como parâmetro e
// retorne uma Promise que é resolvida com os dados da personagem que possui o id informado.
// Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

async function getSimpsom(id) {
  const fileContent = await fs.readFile(nomeDoArquivo, "utf-8");
  const simpsons = JSON.parse(fileContent);

  const promise = new Promise((resolve, reject) => {
    const idExist = simpsons.find((element) => element.id == id);
    if (!idExist) reject(new Error("id não encontrado"));

    const nameSimpson = idExist.name;
    resolve(nameSimpson);
  });

  return promise;
}

getSimpsom(6)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((err) => console.log(`erro: ${err.message}`));

  // Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.


const deleteSimpsons = async (id01, id02) => {

const fileContent = await fs.readFile(nomeDoArquivo, "utf-8");
const simpsonsOld = JSON.parse(fileContent);

const simpsonsNew = simpsonsOld.filter(element => {
   if (element.id !== id01 && element.id !== id02) return element
});
await fs.writeFile(nomeDoArquivo, JSON.stringify(simpsonsNew))
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
}

deleteSimpsons('10', '6')

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, 
// chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const newSimpsonsFile = async () => {

    const fileContent = await fs.readFile(nomeDoArquivo, "utf-8");
    const simpsonsOld = JSON.parse(fileContent);
    const familyIds = [1, 2, 3, 4];
    const simpsonsNew = simpsonsOld.filter(element => familyIds.includes(Number(element.id)));

    await fs.writeFile('.simpsonFamily.json', JSON.stringify(simpsonsNew))
      .then(() => {
        console.log('Arquivo escrito com sucesso!');
      })
      .catch((err) => {
        console.error(`Erro ao escrever o arquivo: ${err.message}`);
      });
    }
    
newSimpsonsFile();