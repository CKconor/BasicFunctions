function sayHello() { console.log("Hello World") }

function factorial(x) {
    var result = 1;

    for (var i = 1; i <= x; i++) {
        result *= i;

    }
    return result;
}

function kebabtoString(str) {

    newStr = str.replace(/-/g, "_");

    return newStr;

}