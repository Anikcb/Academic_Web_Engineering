function fun(str) {
    regexp = /^[A-Za-z0-9]+$/;
    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(fun("12sad"));
console.log(fun("33#$ft"));
