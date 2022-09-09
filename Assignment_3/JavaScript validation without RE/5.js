function fun(val) {
    return val !== val;
}

console.log(fun(NaN));
console.log(fun('bar'));
