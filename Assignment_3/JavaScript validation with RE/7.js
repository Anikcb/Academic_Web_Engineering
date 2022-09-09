function fun(str) {
    regexp = /^[0-9a-fA-F]+$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(fun("fff"));
console.log(fun("fz5500"));
