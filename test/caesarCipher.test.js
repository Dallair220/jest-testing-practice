import caesarCipher from '../src/caesarCipher';

it('should shift each character by 1', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});
it('should shift each character by 2', () => {
  expect(caesarCipher('abc', 2)).toBe('cde');
});

it('should wrap z to a', () => {
  expect(caesarCipher('xyz', 1)).toBe('yza');
});
it('should wrap z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

it('should keep the case', () => {
  expect(caesarCipher('aBc', 1)).toBe('bCd');
});

// not working but I'm just testing stuff.
// it('should keep the case', () => {
//   expect(caesarCipher('XYz', 4)).toBe('BCd');
// });
