var a = 122;
var b = 2345;  
var gcd;
while (a!=b)
{
	if (a>b)a = a -b;
	else b = b - a;
}
console.log(a);
