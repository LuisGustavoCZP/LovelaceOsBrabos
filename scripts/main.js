var foo = 1;

console.log(foo);

function do_something() {
    foo = "hello"; // Isso funciona.
    console.log(foo);
}

do_something();