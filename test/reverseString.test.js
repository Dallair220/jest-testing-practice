import reverseString from '../src/reverseString';

it('should reverse the string 1', () => {
  expect(reverseString('hello')).toBe('olleh');
});

it('should reverse the string 2', () => {
  expect(reverseString('Moin')).toBe('nioM');
});

it('should reverse the string 3', () => {
  expect(reverseString('von Rose gebissen')).toBe('nessibeg esoR nov');
});

it('should reverse the string 4', () => {
  expect(reverseString('')).toBe('');
});
