import capitalize from '../src/capitalize';

it('should return the first character capitalized', () => {
  expect(capitalize('hallo')).toBe('H');
});

it('should return the first character capitalized (2)', () => {
  expect(capitalize('xylophon')).toBe('X');
});

it('should return empty string', () => {
  expect(capitalize('')).toBe('');
});
