function fun(arr1, arr2) {
    var res = 0;
    for(var i = 0; i < arr1.length; i++) {
      for(var j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j])
        {
          res++;
        }
      }
    }
    return res;
  }
  console.log(fun([7,1,4,2,6], [1,9,2]));
  console.log(fun([4,6,1,2], [8,7,6,1]));
  
