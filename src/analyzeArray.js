function calculateAverage(array, length) {
  let sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum / length;
}

function calculateMin(array) {
  let min = Infinity;
  array.forEach((entry) => {
    if (entry < min) min = entry;
  });
  return min;
}

function calculateMax(array) {
  let max = 0;
  array.forEach((entry) => {
    if (entry > max) max = entry;
  });
  return max;
}

export default function analyzeArray(array) {
  let length = array.length;
  let average = calculateAverage(array, length);
  let min = calculateMin(array);
  let max = calculateMax(array);

  return { average, min, max, length };
}
