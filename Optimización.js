var notas = [53, 56, 18, 87, 100, 101];
const notasOrdenadas = bubbleSort(notas);
console.log(notasOrdenadas);
function bubbleSort(array) {
  const length = array.length;
  let swapped;
  
  for (let i = 0; i < length; i++) {
    swapped = false;
    
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    
    if (!swapped) {
      break;
    }
  }
  
  return array;
}