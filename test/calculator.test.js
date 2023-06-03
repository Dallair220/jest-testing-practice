import calculator from '../src/calculator';

it('should add both numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});
it('should add both numbers', () => {
  expect(calculator.add(15, -7)).toBe(8);
});

it('should subtract both numbers', () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});
it('should subtract both numbers', () => {
  expect(calculator.subtract(15, -7)).toBe(22);
});

it('should divide both numbers', () => {
  expect(calculator.divide(8, 4)).toBe(2);
});
it('should addivided both numbers', () => {
  expect(calculator.divide(2, 4)).toBe(0.5);
});

it('should divide both numbers', () => {
  expect(calculator.multiply(8, 4)).toBe(32);
});
it('should addivided both numbers', () => {
  expect(calculator.multiply(-2, 4)).toBe(-8);
});
