function getArrayParams(...arr) {
  let min = max = arr[0];
  let avg = 0;
  for(let i = 0; i < arr.length; i++) {
    if(min > arr[i]) min = arr[i];
    if(max < arr[i]) max = arr[i];
    avg += arr[i];
  }

  avg = avg/arr.length;
  return { min: min, max: max, avg: parseFloat(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
  if(arr.length === 0) return 0;
  
  let sum = arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber;
  }, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) return 0;
  
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0) return 0;
  
  let sumEventElement = 0;
  let sumOddElement = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEventElement += arr[i];
    } else {
      sumOddElement += arr[i];
    } 
  }

  return sumEventElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) return 0;

  let sumEventElement = 0;
  let countEventElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEventElement += arr[i];
      countEventElement++;
    }
  }

  return sumEventElement/countEventElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(...arrOfArr[i]);
    if (resultFunc > maxWorkerResult) maxWorkerResult = resultFunc;
  }

  return maxWorkerResult;
}
