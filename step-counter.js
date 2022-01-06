function range(start, end, step) {
  
  var finalArray = []
  
  if (star === undefined || end === undefined || step === undefined || start > end || step <=0) {
    return finalArray;
  } else {
    for (var i = start; i <= end; i += step) {
      finalArray.push(i);
    }
    return finalArray
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));