"use strict";

var listener = function (click) {
    alert("you pressed the button");
}
document.getElementById("one").addEventListener('click', listener, false);
document.getElementById("plus").addEventListener('click', listener, false);
document.getElementById("equals").addEventListener('click', listener, false);