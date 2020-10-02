
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let arr = array;
  let min = array[0];
  for (let i=1; i <arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  };
  let arr = array;
  let max = array[0];
  for (let i=1; i <arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  };
  let sumOfArr = array.reduce((sum, curr) => {
    return sum + curr;
  });
  let avg = sumOfArr / array.length;
  return avg;
}
