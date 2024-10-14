// Custom Module

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

//  Multiple function export

module.exports = {
    add,
    subtract,
    multiply,
    divide
}

//  Single function export
function single_function(name){
    return name;
}

module.exports = single_function;
