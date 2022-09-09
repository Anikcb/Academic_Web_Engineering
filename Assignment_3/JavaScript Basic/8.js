function fun(arr, k) {

    for (var i = 0; i < k; i++) {
      var index = i,
        tmp = arr[i];
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[index]) {
          index = j;
        }
      }
      arr[i] = arr[index];
      arr[index] = tmp;
    }
    return arr[k - 1];
  }
  
  console.log(fun([-5,2,-2,15,10], 3))
  
