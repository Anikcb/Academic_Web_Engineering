function fun(value) {
    return value === true || value === false || toString.call(value) === '[object Boolean]';
}

console.log(fun(true));
console.log(fun('bar'));
