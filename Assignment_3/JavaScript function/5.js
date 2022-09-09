function fun() {
    console.log( arguments.callee.name );
}

fun();
