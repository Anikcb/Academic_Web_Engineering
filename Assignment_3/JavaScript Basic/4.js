function fun(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++)
    {
      if (/[0-9]/.test(str[i])) sum += parseInt(str[i])
    }
    return sum;
  }
  
  console.log(fun("abcd12efg9"))
  console.log(fun("w3resource"))
  console.log(fun("12345"))
  
