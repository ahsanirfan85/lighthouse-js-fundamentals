function merge (array1, array2) {

  for (var i = 0; i < array2.length; i++) {
    
    array1.push(array2[i]);
  
  }

  array1.sort();

  return array1;

}

console.log(merge([1,2,3],[4,5,6]));
console.log(merge([0,3,1],[9,7,2]));
console.log(merge([],[9,7,2]));
console.log(merge([5,10],[]));