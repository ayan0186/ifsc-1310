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

function truthTable() { 
    let output = document.getElementById("generateTruth"); 

    output.innerHTML = "";
    
    //+= is so that all of the lines are togther and all show up together
    output.innerHTML += "A     B      (A  OR  B)<br>";
    output.innerHTML += "-----------------------<br>";
    //declare variable
    let A, B; 

    //(A ? 'T' : 'F') is a short form if statement that says check the value of A if it is true print T if not then F
    A = true;
    B = true;
    output.innerHTML += (A ? 'T' : 'F') + "     " + (B ? 'T' : 'F') + "           " + (A || B ? 'T' : 'F') + "<br>";

    A = true;
    B = false; 
    output.innerHTML += (A ? 'T' : 'F') + "     " + (B ? 'T' : 'F') + "           " + (A || B ? 'T' : 'F') + "<br>";

    A = false;
    B = true; 
    output.innerHTML += (A ? 'F' : 'F') + "     " + (B ? 'T' : 'F') + "           " + (A || B ? 'T' : 'F') + "<br>";

    A = false; 
    B = false; 
    output.innerHTML += (A ? 'F' : 'F') + "     " + (B ? 'F' : 'F') + "           " + (A || B ? 'F' : 'F') + "<br>";

    //For AND operator
    output.innerHTML += "A     B      (A  and  B)<br>";
    output.innerHTML += "-----------------------<br>";

    A = true;
    B = true;
    output.innerHTML += (A ? 'T' : 'F') + "     " + (B ? 'T' : 'F') + "           " + (A && B ? 'T' : 'F') + "<br>";

    A = true;
    B = false; 
    output.innerHTML += (A ? 'T' : 'F') + "     " + (B ? 'T' : 'F') + "           " + (A && B ? 'F' : 'F') + "<br>";

    A = false;
    B = true; 
    output.innerHTML += (A ? 'T' : 'F') + "     " + (B ? 'T' : 'F') + "           " + (A && B ? 'F' : 'F') + "<br>";

    A = false; 
    B = false; 
    output.innerHTML += (A ? 'T' : 'F') + "     " + (B ? 'T' : 'F') + "           " + (A && B ? 'F' : 'F') + "<br>";

}

function JsFun() { 
    if (prompt('Is JavaScript fun?')==='yes') alert('You win'); else alert('you lose');

}

//function for bitwise operators
function calculate() { 
    let A = parseInt(document.getElementById("BinaryA").value, 10);
    let B = parseInt(document.getElementById("BinaryB").value, 10); 

    let andResults = A & B; //Sets each bit to 1 if both bits are 1
    let orResults = A | B; //Sets each bit to 1 if one of two bits is 1
    let XorResults = A ^ B; //	Sets each bit to 1 if only one of two bits is 1

    alert(
        "Bitwise And Operator: "+ andResults + "\n" + 
        "Bitwise or Operator: " + orResults + "\n" + 
        "Bitwise XOR Operator: " + XorResults
    );
    


}