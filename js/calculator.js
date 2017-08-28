"use strict";
//button validation test.
var listener = function (click) {
    alert("you pressed the button");
}
//Start of functions to handle button input into operand one
var inputOne = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
    var valueToAdd= document.getElementById('one').value;
    console.log(valueToAdd);
    document.getElementById('operand-one').value+=valueToAdd;
    console.log(document.getElementById('operand-one'));
} else {
        document.getElementById('operand-two').value+=valueToAdd;
    }
}
var inputTwo = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
    var valueToAdd= document.getElementById('two').value;
    console.log(valueToAdd);
    document.getElementById('operand-one').value+=valueToAdd;
    console.log(document.getElementById('operand-one'));
}}
//End of functions to handle button input into operand one

// Function for the operator form
var operatorPlus = function (click) {
    var operatorToUse = document.getElementById('plus').value;
    document.getElementById('operator').value=operatorToUse;
    console.log(document.getElementById('operator'));
}
var operatorMinus = function (click) {
    var operatorToUse = document.getElementById('minus').value;
    document.getElementById('operator').value=operatorToUse;
    console.log(document.getElementById('operator'));
}

//Loggers from various functions above
document.getElementById("one").addEventListener('click', inputOne, false);
document.getElementById("two").addEventListener('click', inputTwo, false);
document.getElementById("plus").addEventListener('click', operatorPlus, false);
document.getElementById("minus").addEventListener('click', operatorMinus, false);