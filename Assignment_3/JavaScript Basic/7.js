function fun(n) {
    var res = 0;
    for (var i = 5; i <= n; i += 5) {
        var num = i;
        while (num % 5 === 0) {
            num /= 5;
            res++;
        }
    }
    return res;
}

console.log(fun(4))
console.log(fun(50))
