// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.


// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require('@jest/globals');
const { getPokemonDetails } = require('./exercise8');



describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código

    const errorReturn = new Error('Não temos esse pokémon para você :(')

    getPokemonDetails(

        (pokemon) => pokemon.name === 'Venturin', (error, message) => {
            expect(error).toEqual(errorReturn);
            expect(message).toEqual(null);
            done()
        })
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código

    const retorno = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

    getPokemonDetails(

        (pokemon) => pokemon.name === 'Bulbasaur', (error, message) => {
                expect(message).toBe(retorno);
                expect(error).toEqual(null);
                done();
        })
  });
});


