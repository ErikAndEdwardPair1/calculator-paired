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
        var valuesToAddTwo=document.getElementById('one').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputTwo = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
    var valueToAdd= document.getElementById('two').value;
    console.log(valueToAdd);
    document.getElementById('operand-one').value+=valueToAdd;
    console.log(document.getElementById('operand-one'));
}else{
        var valuesToAddTwo=document.getElementById('two').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
//End of functions to handle button input into operand one

// Function for the operator forms
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
//End of functions for the operator forms

//Function for handeling equal logging
var equality= function(click){
//    grab value of operand one and store to a variable
    var first=Number(document.getElementById('operand-one').value);
//    grab value of operand two and store to a variable
    var second=Number(document.getElementById('operand-two').value);
//    Use a switch statment to handle the math needed.
    if(document.getElementById('plus').value ==='+'){
        var calculated= first+second;
    }

//    clear all the forms in the calculator
//     document.getElementById('operand-one').value="";
    document.getElementById('operator').value="";
    document.getElementById('operand-two').value="";
//    return calculated value to operand one
    document.getElementById('operand-one').value=calculated;
}
//Loggers from various functions above
document.getElementById("one").addEventListener('click', inputOne, false);
document.getElementById("two").addEventListener('click', inputTwo, false);
document.getElementById("plus").addEventListener('click', operatorPlus, false);
document.getElementById("minus").addEventListener('click', operatorMinus, false);
document.getElementById("equals").addEventListener('click', equality, false);