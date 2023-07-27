// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = arr[i];
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        smallestIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = smallest;
    arr[smallestIndex] = temp;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const midPonit = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPonit);
  const right = arr.slice(midPonit);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
