//JavaScript Commands
//This Tells the Buttons what to do
function addNumber() {
    var num1 = parseFloat(prompt("Enter First Number"));
    var num2 = parseFloat(prompt("Enter second number"));
    var results = num1 + num2;
    alert(num1 + " + " + num2 + " = " + results); 
}

function subNumber() {
    var num1 = parseFloat(prompt("Enter First Number"));
    var num2 = parseFloat(prompt("Enter Second Number"));
    var results = num1 - num2; 
    alert( num1 + " - " + num2 + " = " + results); 
}

function multNumber() {
    var num1 = parseFloat(prompt("Enter First Number"));
    var num2 = parseFloat(prompt("Enter Second Number"));
    var results = num1 * num2; 
    alert( num1 + " * " + num2 + " = " + results); 
}

function divNumber() {
    var num1 = parseFloat(prompt("Enter First Number"));
    var num2 = parseFloat(prompt("Enter Second Number"));

//if statement for dividing by zero
    if (num2 == 0) {
         alert("Error Cannot Divide Number By 0");
    }
       


    var results = num1 / num2; 
    alert( num1 + " / " + num2 + " = " + results); 
}