const sum = require ('./sum');

describe('Exercício 01', () => {
test('sum dois valores', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('sum valores zero ', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('sum um valor é string', () => {
    expect(() => { sum(4,'5') }).toThrow();
  });
  test('sum mensagem de erro', () => {
    expect(() => { sum(4,'5') }).toThrowError(new Error('parameters must be numbers'));
  });
});