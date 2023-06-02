const notas = [26.67, 33.33, 46.67, 53.33, 46.67, 53.33, 66.67, 100.00, 100.00, ];
console.log(notas.sort());

const notasOrdenadas = bubbleSort(notas);

console.log(notasOrdenadas);

function bubbleSort(array) {
  const length = array.length;
  
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  
  return array;
}