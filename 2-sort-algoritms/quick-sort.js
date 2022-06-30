function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  var unsorted = [23, 45, 16, 37, 3, 99, 22, 66, 13, 123, 567, 32, 12, 2, 1, 6, 123, 1345, 1267, 44];
  var sorted = quicksort(unsorted);
  
  console.log('Sorted array', sorted);