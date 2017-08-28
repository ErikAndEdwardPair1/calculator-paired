"use strict";
//button validation test.
var listener = function (click) {
    alert("you pressed the button");
}
//Start of functions to handle button input into operand one
var testerOne = function (click) {
//    add value of id=one to value of form operandone
    var valueToAdd= document.getElementById('one').value;
    console.log(valueToAdd);
    document.getElementById('operand-one').value+=valueToAdd;
    console.log(document.getElementById('operand-one'));
}
var testerTwo = function (click) {
//    add value of id=one to value of form operandone
    var valueToAdd= document.getElementById('two').value;
    console.log(valueToAdd);
    document.getElementById('operand-one').value+=valueToAdd;
    console.log(document.getElementById('operand-one'));
}
//End of functions to handle button input into operand one

//Loggers from various functions above
document.getElementById("one").addEventListener('click', testerOne, false);
document.getElementById("two").addEventListener('click', testerTwo, false);
document.getElementById("plus").addEventListener('click', listener, false);
document.getElementById("equals").addEventListener('click', listener, false);