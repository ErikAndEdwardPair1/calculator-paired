"use strict";
//button validation test.
var listener = function (click) {
    alert("you pressed the button");
}
//Start of functions to handle button input into operand one
var inputNumber= function (click) {
    if (document.getElementById('operator').value === ""){
        document.getElementById('operand-one').value+=this.value;
    } else {
        document.getElementById('operand-two').value+=this.value
    }
}
// var inputOne = function (click) {
// //    add value of id=one to value of form operandone
//     if (document.getElementById('operator').value === ""){
//     var valueToAdd= document.getElementById('one').value;
//     document.getElementById('operand-one').value+=valueToAdd;
// } else {
//         var valuesToAddTwo=document.getElementById('one').value;
//         document.getElementById('operand-two').value+=valuesToAddTwo;
//     }
// }
// var inputTwo = function (click) {
// //    add value of id=one to value of form operandone
//     if (document.getElementById('operator').value === ""){
//     var valueToAdd= document.getElementById('two').value;
//     document.getElementById('operand-one').value+=valueToAdd;
// }else{
//         var valuesToAddTwo=document.getElementById('two').value;
//         document.getElementById('operand-two').value+=valuesToAddTwo;
//     }
// }
// var inputThree = function (click) {
// //    add value of id=one to value of form operandone
//     if (document.getElementById('operator').value === ""){
//         var valueToAdd= document.getElementById('three').value;
//         document.getElementById('operand-one').value+=valueToAdd;
//     } else {
//         var valuesToAddTwo=document.getElementById('three').value;
//         document.getElementById('operand-two').value+=valuesToAddTwo;
//     }
// }
// var inputFour = function (click) {
// //    add value of id=one to value of form operandone
//     if (document.getElementById('operator').value === ""){
//         var valueToAdd= document.getElementById('four').value;
//         document.getElementById('operand-one').value+=valueToAdd;
//     } else {
//         var valuesToAddTwo=document.getElementById('four').value;
//         document.getElementById('operand-two').value+=valuesToAddTwo;
//     }
// }
// var inputFive = function (click) {
// //    add value of id=one to value of form operandone
//     if (document.getElementById('operator').value === ""){
//         var valueToAdd= document.getElementById('five').value;
//         document.getElementById('operand-one').value+=valueToAdd;
//     } else {
//         var valuesToAddTwo=document.getElementById('five').value;
//         document.getElementById('operand-two').value+=valuesToAddTwo;
//     }
// }
// var inputSix = function (click) {
// //    add value of id=one to value of form operandone
//     if (document.getElementById('operator').value === ""){
//         var valueToAdd= document.getElementById('six').value;
//         document.getElementById('operand-one').value+=valueToAdd;
//     } else {
//         var valuesToAddTwo=document.getElementById('six').value;
//         document.getElementById('operand-two').value+=valuesToAddTwo;
//     }
// }
// var inputSeven = function (click) {
// //    add value of id=one to value of form operandone
//     if (document.getElementById('operator').value === ""){
//         var valueToAdd= document.getElementById('seven').value;
//         document.getElementById('operand-one').value+=valueToAdd;
//     } else {
//         var valuesToAddTwo=document.getElementById('seven').value;
//         document.getElementById('operand-two').value+=valuesToAddTwo;
//     }
// }
// var inputEight = function (click) {
// //    add value of id=one to value of form operandone
//     if (document.getElementById('operator').value === ""){
//         var valueToAdd= document.getElementById('eight').value;
//         document.getElementById('operand-one').value+=valueToAdd;
//     } else {
//         var valuesToAddTwo=document.getElementById('eight').value;
//         document.getElementById('operand-two').value+=valuesToAddTwo;
//     }
// }
// var inputNine = function (click) {
// //    add value of id=one to value of form operandone
//     if (document.getElementById('operator').value === ""){
//         var valueToAdd= document.getElementById('nine').value;
//         document.getElementById('operand-one').value+=valueToAdd;
//     } else {
//         var valuesToAddTwo=document.getElementById('nine').value;
//         document.getElementById('operand-two').value+=valuesToAddTwo;
//     }
// }
// var inputZero = function (click) {
// //    add value of id=one to value of form operandone
//     if (document.getElementById('operator').value === ""){
//         var valueToAdd= document.getElementById('zero').value;
//         document.getElementById('operand-one').value+=valueToAdd;
//     } else {
//         var valuesToAddTwo=document.getElementById('zero').value;
//         document.getElementById('operand-two').value+=valuesToAddTwo;
//     }
// }
var inputDecimal = function (click) {
    if (document.getElementById('operator').value ===""){
        var valueToAdd= document.getElementById('decimal').value;
        document.getElementById('operand-one').value+=valueToAdd
    } else {
        var valuesToAddTwo=document.getElementById('decimal').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputPlusMinus = function (click) {
    if (document.getElementById('operator').value ===""){
        document.getElementById('operand-one').value*=-1
    } else {
        document.getElementById('operand-two').value*=-1
    }
}
var inputPercent = function (click) {
    if (document.getElementById('operator').value ===""){
        document.getElementById('operand-one').value*=.01
    } else {
        document.getElementById('operand-two').value*=.01;
    }
}
//End of functions to handle button input into operand one

// Function for the operator forms
var operatorPlus = function (click) {
    var operatorToUse = document.getElementById('plus').value;
    document.getElementById('operator').value=operatorToUse;
}
var operatorMinus = function (click) {
    var operatorToUse = document.getElementById('minus').value;
    document.getElementById('operator').value=operatorToUse;
}
var operatorMultiply = function (click) {
    var operatorToUse = document.getElementById('multiply').value;
    document.getElementById('operator').value=operatorToUse;
}
var operatorDivide = function (click) {
    var operatorToUse = document.getElementById('divide').value;
    document.getElementById('operator').value=operatorToUse;
}
//End of functions for the operator forms

//Function for handeling equal logging
var equality= function(click){
//    grab value of operand one and store to a variable
    var first=Number(document.getElementById('operand-one').value);
//    grab value of operand two and store to a variable
    var second=Number(document.getElementById('operand-two').value);
//    Use a switch statment to handle the math needed.
    var calculated=0;
    switch(document.getElementById('operator').value){
        case '+':
            calculated=first+second;
            break;
        case '-':
            calculated=first-second;
            break;
        case '*':
            calculated=first*second;
            break;
        case '/':
            calculated=first/second;
            break;
    }

//    clear all the forms in the calculator
//     document.getElementById('operand-one').value="";
    document.getElementById('operand-two').value="";
//    return calculated value to operand one
    document.getElementById('operand-one').value=calculated;
}

//function to handle the clear function
var clear= function(click){
    document.getElementById('operand-one').value="";
    document.getElementById('operator').value="";
    document.getElementById('operand-two').value="";
}
//Loggers from various functions above

var numberInputs = document.getElementsByClassName('number-input');

for (var i = 0; i < numberInputs.length; i++){
    numberInputs[i].addEventListener('click', inputNumber, false);
}

document.getElementById("decimal").addEventListener('click', inputDecimal, false);
document.getElementById("plus").addEventListener('click', operatorPlus, false);
document.getElementById("minus").addEventListener('click', operatorMinus, false);
document.getElementById("multiply").addEventListener('click', operatorMultiply, false);
document.getElementById("divide").addEventListener('click', operatorDivide, false);
document.getElementById("clear").addEventListener('click', clear, false);
document.getElementById("equals").addEventListener('click', equality, false);
document.getElementById("plus-minus").addEventListener('click', inputPlusMinus, false);
document.getElementById("percent").addEventListener('click', inputPercent, false);

