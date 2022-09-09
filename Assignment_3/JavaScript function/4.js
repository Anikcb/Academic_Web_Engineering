function fun(str1) {
    var uchars = {};
    str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
    return uchars;
    }
    console.log(fun("vjjdknfg dfgmsdf dfglsmls dkjfngdlf"));
    
