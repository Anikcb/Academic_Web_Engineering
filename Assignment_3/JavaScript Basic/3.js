function fun(str)
{
  if (str.length < 4)return false;
  front = str.substring(0, 4);
  if (front == 'Java')return true;
  else return false;
}

console.log(fun("ABC"));
console.log(fun("Jovascript"));
console.log(fun("Javascript"));
