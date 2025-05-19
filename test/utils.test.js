// __tests__/utils.test.js
const { sumarPrecios } = require('../scripts/unitls');

test('suma de precios 10 + 15 debe ser 25', () => {
  expect(sumarPrecios(10, 15)).toBe(25);
});
