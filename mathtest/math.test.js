const sum = require('./math');

test('Soma de dois números positivos', () => {
    expect(sum(2, 3)).toBe(5);
});

test('Soma de números negativos', () => {
    expect(sum(-2, -3)).toBe(-5);
});

test('Soma de um número positivo com zero', () => {
    expect(sum(3, 0)).toBe(3);
});
