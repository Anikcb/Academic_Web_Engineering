function fun(value) {
    return toString.call(value) === '[object RegExp]';
}

console.log(fun(/test/));
console.log(fun('bar'));
