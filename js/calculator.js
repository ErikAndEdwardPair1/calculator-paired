"use strict";
//button validation test.
var listener = function (click) {
    alert("you pressed the button");
}
//Start of functions to handle inputs into calculator
var inputNumber= function () {
    if (document.getElementById('operator').value === ""){
        document.getElementById('operand-one').value+=this.value;
    } else {
        document.getElementById('operand-two').value+=this.value
    }
}
//
var inputDecimal = function () {
    if (document.getElementById('operator').value ===""){
        var valueToAdd= document.getElementById('decimal').value;
        document.getElementById('operand-one').value+=valueToAdd
    } else {
        var valuesToAddTwo=document.getElementById('decimal').value;
        document.getElementById('operand-two').value+=valuesToAddTwo;
    }
};
var inputPlusMinus = function () {
    if (document.getElementById('operator').value ===""){
        document.getElementById('operand-one').value*=-1
    } else {
        document.getElementById('operand-two').value*=-1
    }
};
var inputPercent = function () {
    if (document.getElementById('operator').value ===""){
        document.getElementById('operand-one').value*=.01
    } else {
        document.getElementById('operand-two').value*=.01;
    }
};

var inputOperator = function () {
    document.getElementById('operator').value = this.value;
};
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
};

//function to handle the clear function
var clear= function(){
    document.getElementById('operand-one').value="";
    document.getElementById('operator').value="";
    document.getElementById('operand-two').value="";
};
//Loggers from various functions above

var numberInputs = document.getElementsByClassName('number-input');

for (var i = 0; i < numberInputs.length; i++){
    numberInputs[i].addEventListener('click', inputNumber, false);
}

var operatorInputs = document.getElementsByClassName('operator-input');

for (var i = 0; i <operatorInputs.length; i++){
    operatorInputs[i].addEventListener('click', inputOperator, false);
}

document.getElementById("decimal").addEventListener('click', inputDecimal, false);
document.getElementById("clear").addEventListener('click', clear, false);
document.getElementById("equals").addEventListener('click', equality, false);
document.getElementById("plus-minus").addEventListener('click', inputPlusMinus, false);
document.getElementById("percent").addEventListener('click', inputPercent, false);

//Special methods
var factorial= function(){
    var numTemp=Number(document.getElementById('operand-one').value);
    var result=1;
    for(var i=1;i<=numTemp;i++){
        result*=i;
    }
    document.getElementById('operand-one').value=result;
}
document.getElementById("factorial").addEventListener('click', factorial, false);

var factors=function(){
    var parentNumber=Number(document.getElementById('operand-one').value);
    if(parentNumber<0){
        parentNumber=parentNumber*-1;
    }
    var firstFactors=[];
    for(var i=0;i<parentNumber;i++){
        if(parentNumber%(i+1)===0){
            firstFactors.push(i+1);
        }
    }
    alert('The factors of '+parentNumber+ ' are '+firstFactors);

}
document.getElementById("factors").addEventListener('click', factors, false);

var sqrt=function(){
    var sqrtNumber=Number(document.getElementById('operand-one').value);
    document.getElementById('operand-one').value=Math.sqrt(sqrtNumber);
//    use nested for loops to get to a custom made sqrt function if there is time tomorrow.
}
document.getElementById("sqrt").addEventListener('click', sqrt, false);

var binary=function(){
        var biNumber = Number(document.getElementById('operand-one').value);
        var biNumber2 = biNumber.toString(2);
        document.getElementById('operand-one').value = biNumber2;

}
document.getElementById("binary").addEventListener('click', binary, false);