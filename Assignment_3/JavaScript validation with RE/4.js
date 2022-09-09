function fun(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
    }


console.log(fun("djfhdf  dff dgfdg ddgfd gdffg dfgffdg ffg"))
