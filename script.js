
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

function mod(a, b) {
    return a % b;
}

// TODO: add functionality to evaluate more complex equations
function operate(equation) {
    a = Number(equation[0]);
    operator = equation[1];
    b = Number(equation[2]);

    // check for division by zero
    if (operator == '/' && b == 0) {
        return "ERROR";
    }

    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        case '%':  
            return mod(a, b);
    }
}

function numInput(event) {
    let num;
    switch(event.srcElement.id) {
        case "zero":
            if (currNum.length > 0) {
                currNum += '0';
            }
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

function roundOff(num, dp) {
    return Math.round(num * 10 ** dp) / (10 ** dp);
}

function operatorInput(event) {
    let operator;
    switch(event.srcElement.id) {
        case "add":
            operator = "+";
            break;
        case "subtract":
            operator = "-";
            break;
        case "multiply":
            operator = "*";
            break;
        case "divide":
            operator = "/";
            break;
        case "mod":
            operator = "%";
            break;
        case "equals":
            equation.push(currNum);
            // display result and reset equation
            let result = roundOff(operate(equation), 2);
            document.querySelector('.screen').innerHTML = result;
            equation = new Array();
            currNum = result;
            return;
    }
    equation.push(currNum);
    equation.push(operator);
    currNum = "";
}

function allClear() {
    currNum = "";
    document.querySelector('.screen').innerHTML = currNum;
}

function clear() {
    currNum = currNum.slice(0,-1);
    document.querySelector('.screen').innerHTML = currNum;
}


var equation = new Array();
var currNum = "";


for (btn of document.getElementsByClassName("num-btn")) {
    btn.addEventListener("click", numInput);
};

for (btn of document.getElementsByClassName("operator-btn")) {
    btn.addEventListener("click", operatorInput);
};

document.getElementById("clear").addEventListener("click", clear);
document.getElementById('all-clear').addEventListener('click', allClear);




