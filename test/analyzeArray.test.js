import analyzeArray from '../src/analyzeArray';

it('should return the correct properties', () => {
  // toEqual for objects
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it('should return the correct properties', () => {
  expect(analyzeArray([2, 9, 4, 4, 6])).toEqual({
    average: 5,
    min: 2,
    max: 9,
    length: 5,
  });
});
