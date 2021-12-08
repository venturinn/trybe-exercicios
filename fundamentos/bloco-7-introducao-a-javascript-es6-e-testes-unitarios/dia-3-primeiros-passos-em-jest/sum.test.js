const { MyRemove: myRemove, sum: sum } = require("./sum");

describe("Exercício 01", () => {
  test("sum dois valores", () => {
    expect(sum(4, 5)).toBe(9);
  });
  test("sum valores zero", () => {
    expect(sum(0, 0)).toBe(0);
  });
  test("sum um valor é string", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });
  test("sum mensagem de erro", () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError(new Error("parameters must be numbers"));
  });
});

describe("Exercício 02", () => {
  test("myRemove remove item correto", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test("myRemove retorna valor diferente de", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test("myRemove não remove item que não existe", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
