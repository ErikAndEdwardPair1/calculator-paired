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
    document.getElementById('operand-one').value+=valueToAdd;
} else {
        var valuesToAddTwo=document.getElementById('one').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputTwo = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
    var valueToAdd= document.getElementById('two').value;
    document.getElementById('operand-one').value+=valueToAdd;
}else{
        var valuesToAddTwo=document.getElementById('two').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputThree = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
        var valueToAdd= document.getElementById('three').value;
        document.getElementById('operand-one').value+=valueToAdd;
    } else {
        var valuesToAddTwo=document.getElementById('three').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputFour = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
        var valueToAdd= document.getElementById('four').value;
        document.getElementById('operand-one').value+=valueToAdd;
    } else {
        var valuesToAddTwo=document.getElementById('four').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputFive = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
        var valueToAdd= document.getElementById('five').value;
        document.getElementById('operand-one').value+=valueToAdd;
    } else {
        var valuesToAddTwo=document.getElementById('five').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputSix = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
        var valueToAdd= document.getElementById('six').value;
        document.getElementById('operand-one').value+=valueToAdd;
    } else {
        var valuesToAddTwo=document.getElementById('six').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputSeven = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
        var valueToAdd= document.getElementById('seven').value;
        document.getElementById('operand-one').value+=valueToAdd;
    } else {
        var valuesToAddTwo=document.getElementById('seven').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputEight = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
        var valueToAdd= document.getElementById('eight').value;
        document.getElementById('operand-one').value+=valueToAdd;
    } else {
        var valuesToAddTwo=document.getElementById('eight').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputNine = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
        var valueToAdd= document.getElementById('nine').value;
        document.getElementById('operand-one').value+=valueToAdd;
    } else {
        var valuesToAddTwo=document.getElementById('nine').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
}
var inputZero = function (click) {
//    add value of id=one to value of form operandone
    if (document.getElementById('operator').value === ""){
        var valueToAdd= document.getElementById('zero').value;
        document.getElementById('operand-one').value+=valueToAdd;
    } else {
        var valuesToAddTwo=document.getElementById('zero').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
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
    document.getElementById('operator').value="";
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
document.getElementById("one").addEventListener('click', inputOne, false);
document.getElementById("two").addEventListener('click', inputTwo, false);
document.getElementById("three").addEventListener('click', inputThree, false);
document.getElementById("four").addEventListener('click', inputFour, false);
document.getElementById("five").addEventListener('click', inputFive, false);
document.getElementById("six").addEventListener('click', inputSix, false);
document.getElementById("seven").addEventListener('click', inputSeven, false);
document.getElementById("eight").addEventListener('click', inputEight, false);
document.getElementById("nine").addEventListener('click', inputNine, false);
document.getElementById("zero").addEventListener('click', inputZero, false);
document.getElementById("plus").addEventListener('click', operatorPlus, false);
document.getElementById("minus").addEventListener('click', operatorMinus, false);
document.getElementById("multiply").addEventListener('click', operatorMultiply, false);
document.getElementById("divide").addEventListener('click', operatorDivide, false);
document.getElementById("clear").addEventListener('click', clear, false);
document.getElementById("equals").addEventListener('click', equality, false);