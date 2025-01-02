
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}   

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b); 
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function numInput(event) {
    let num;
    switch(event.srcElement.id) {
        case "zero":
            currNum += "0";
            break;
        case "one":
           currNum += "1"; 
           break;
        case "two":
            currNum += "2"; 
            break;
        case "three":
            currNum += "3";
            break;
        case "four":
            currNum += "4";
            break;
        case "five":
            currNum += "5";
            break;
        case "six":
            currNum += "6";
            break;
        case "seven":
            currNum += "7";
            break;
        case "eight":
            currNum += "8";
            break;
        case "nine":
            currNum += "9";
            break;
        case "decimal":
            currNum += ".";
            break;
    }
    document.querySelector(".screen").innerHTML = currNum;
}

var equation = new Array();
var currNum = "";

let numBtns = document.getElementsByClassName("num-btn");
for (btn of numBtns) {
    btn.addEventListener("click", numInput);
};

let operatorBtns = document.getElementsByClassName("operator-btn");
let clearBtn = document.getElementById("clear-btn");
let allClearBtn = document.getElementById("all-clear-btn");
let modBtn = document.getElementById("mod-btn");



