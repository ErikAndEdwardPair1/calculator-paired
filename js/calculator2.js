"use strict"
//Begin number input functions
var valueToAdd;
var inputOne = function (click) {
//    add value of id=one to value of form operandone
        valueToAdd= document.getElementById('one').value;
        document.getElementById('logBar').value+=valueToAdd;
}
document.getElementById("one").addEventListener('click', inputOne, false);
var inputTwo = function (click) {
//    add value of id=one to value of form operandone
    valueToAdd= document.getElementById('two').value;
    document.getElementById('logBar').value+=valueToAdd;
}
document.getElementById("two").addEventListener('click', inputTwo, false);
var inputThree = function (click) {
//    add value of id=one to value of form operandone
    valueToAdd= document.getElementById('three').value;
    document.getElementById('logBar').value+=valueToAdd;
}
document.getElementById("three").addEventListener('click', inputThree, false);
var inputFour = function (click) {
//    add value of id=one to value of form operandone
    valueToAdd= document.getElementById('four').value;
    document.getElementById('logBar').value+=valueToAdd;
}
document.getElementById("four").addEventListener('click', inputFour, false);
var inputFive = function (click) {
//    add value of id=one to value of form operandone
    valueToAdd= document.getElementById('five').value;
    document.getElementById('logBar').value+=valueToAdd;
}
document.getElementById("five").addEventListener('click', inputFive, false);
var inputSix = function (click) {
//    add value of id=one to value of form operandone
    valueToAdd= document.getElementById('six').value;
    document.getElementById('logBar').value+=valueToAdd;
}
document.getElementById("six").addEventListener('click', inputSix, false);
var inputSeven = function (click) {
//    add value of id=one to value of form operandone
    valueToAdd= document.getElementById('seven').value;
    document.getElementById('logBar').value+=valueToAdd;
}
document.getElementById("seven").addEventListener('click', inputSeven, false);
var inputEight = function (click) {
//    add value of id=one to value of form operandone
    valueToAdd= document.getElementById('eight').value;
    document.getElementById('logBar').value+=valueToAdd;
}
document.getElementById("eight").addEventListener('click', inputEight, false);
var inputNine = function (click) {
//    add value of id=one to value of form operandone
    valueToAdd= document.getElementById('nine').value;
    document.getElementById('logBar').value+=valueToAdd;
}
document.getElementById("nine").addEventListener('click', inputNine, false);
var inputZero = function (click) {
//    add value of id=one to value of form operandone
    valueToAdd= document.getElementById('zero').value;
    document.getElementById('logBar').value+=valueToAdd;
}
document.getElementById("zero").addEventListener('click', inputZero, false);
//End of number input functions

//start of operator functions
//a single function that is called by multiple event listers. It contains a switch statment for the value it is passed.
//Then does operation
//get the operator by looking at the last element in the array of options
var calculation = function(click){
    var stringOfLog=document.getElementById("logBar").value;
    console.log(stringOfLog);
    var workingArray=stringOfLog.split(' ');
    workingArray=workingArray.pop();
    // workingArray=workingArray.push('+');
    console.log(workingArray);
    var holdValue=0;
    var i=0;
    //For loops are done to length minus one because the last element is the operator
    switch(workingArray.lastIndexOf()){

        case '+':
            for(i=0;i<workingArray.length-1;i++){
                holdValue+=Number(workingArray[i]);
            }
            console.log(holdValue);
            break;
        case '-':
            for(i=0;i<workingArray.length-1;i++){
                holdValue-=Number(workingArray[i]);
            }
            break;
        case'*':
            for(i=0;i<workingArray.length-1;i++){
                holdValue*=Number(workingArray[i]);
            }
            break;
        case'/':
            for(i=0;i<workingArray.length-1;i++){
                holdValue/=Number(workingArray[i]);
            }
            break;

    }
    document.getElementById('logBar').value=holdValue;
};
document.getElementById("plus").addEventListener('click', calculation, false);
document.getElementById("minus").addEventListener('click', calculation, false);
document.getElementById("multiply").addEventListener('click', calculation, false);
document.getElementById("divide").addEventListener('click', calculation, false);