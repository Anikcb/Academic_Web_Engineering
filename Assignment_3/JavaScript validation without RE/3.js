function fun(value) {
    if (Object.prototype.toString.call(value) !== '[object String]')return false;
    return value && value.length === 1;
}

console.log(fun('f'));
console.log(fun(5));
