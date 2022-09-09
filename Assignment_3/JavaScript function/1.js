function fun(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'Not palindrome';
        }
    }
    return 'Palindrome';
}


console.log(fun("madam"));
