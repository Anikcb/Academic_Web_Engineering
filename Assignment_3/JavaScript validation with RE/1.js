function fun(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      console.log("Uppercase");
    } 
    else
    {
      console.log("Not uppercase");
    }
}
fun('Abcd');
fun('abcd');
