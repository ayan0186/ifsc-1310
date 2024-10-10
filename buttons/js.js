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
    if (prompt('Is JavaScript fun?')==='yes') 
        alert('You win'); 
    else alert('you lose');

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

//hw5 option A code
function array() {
    let cars = ["BMW", "Bugatti", "Pagani", "Lamborghini", "Porche"]; 
    document.getElementById("print").innerHTML = cars; 
}

function loop() {
let i = 0     
let text = ""
    while (i<10) {
        text += "<br>" + "The Number is: " + i
        i++; 
    }
document.getElementById("print").innerHTML = text; 
}

function recursive() {
    let text = prompt("Enter Happy Time");
    if (text !== "happy time"){
        recursive();
    }
    document.getElementById("print").innerHTML += "<br>" + text + "<br>"; 
}

//hw6
function arrayLoop() {
    let fruits = ["Apple", "Banana", "Orange", "Kiwi", "Watermelon"];
    let results = ""; 
    for (let i = 0; i < fruits.length; i++ ) {
        results += fruits[i];
        if (i < fruits.length - 1) {
            results += ", ";
        }
    }

    document.getElementById("print2").innerHTML = results; 
}

function forEach() { 
    const numbers = [21, 22 ,23 ,24, 25];
    let txt = "";
    numbers.forEach(myFunction);
    document.getElementById("print2").innerHTML = txt
function myFunction(value, index, array) {
  txt += value + "<br>";
}
}

function push() { 
    const soda = ["Coke", "Pepsi", "Fanta", "Sprite"]
    soda.push("Dr. Pepper"); 
    document.getElementById("print2").innerHTML += soda; 
}

function pop() { 
    const soda2 = ["Coke", "Pepsi", "Fanta", "Sprite"]
    soda2.pop(); 
    document.getElementById("print2").innerHTML = ""; 
    document.getElementById("print2").innerHTML += soda2;
}

function shift() { 
    const soda3 = ["Coke", "Pepsi", "Fanta", "Sprite"]
    soda3.shift(); 
    document.getElementById("print2").innerHTML = ""; 
    document.getElementById("print2").innerHTML = soda3;
}

function unshift() { 
    const soda4 = ["Coke", "Pepsi", "Fanta", "Sprite"]
    soda4.unshift("Mountain Dew"); 
    document.getElementById("print2").innerHTML = ""; 
    document.getElementById("print2").innerHTML = soda4;
}

function twoD() {
    const fruits2D = [
        ["Apple", "Banana", "Cherry"],
        ["Orange", "Kiwi", "Grape"],
        ["Pineapple", "Mango", "Peach"]
    ];
    
    let results = "";
    
    for (let i = 0; i < fruits2D.length; i++) {
        for (let j = 0; j < fruits2D[i].length; j++) {
            results += fruits2D[i][j] + " ";
        }
        results += "<br>"; // Line break after each row
    }
    
    document.getElementById("print2").innerHTML = results;
}

function threeD() {
    const fruits3D = [
        [
            ["Apple", "Banana"], // Basket 1
            ["Orange", "Kiwi"]   // Basket 2
        ],
        [
            ["Grape", "Pineapple"], // Basket 3
            ["Mango", "Peach"]      // Basket 4
        ]
    ];
    
    let results = "";
    
    for (let i = 0; i < fruits3D.length; i++) {
        for (let j = 0; j < fruits3D[i].length; j++) {
            for (let k = 0; k < fruits3D[i][j].length; k++) {
                results += fruits3D[i][j][k] + " ";
            }
            results += "<br>"; // Line break after each basket
        }
        results += "<br>"; // Extra line break between different groups
    }
    document.getElementById("print2").innerHTML = ""; 
    document.getElementById("print2").innerHTML = results;
}

function lengthArray() { 
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("print2").innerHTML = "";
fruits[fruits.length] = "Kiwi";
document.getElementById("print2").innerHTML = fruits;
}

function typeOf() { 
    const fruitsTypeOf = ["Banana", "Orange", "Apple", "Mango"];
 
    const typeofFruits = typeof fruitsTypeOf;

    document.getElementById("print2").innerHTML = "";
    document.getElementById("print2").innerHTML = typeofFruits;
}

function displayOutput(message) {
    document.getElementById("print3").innerHTML = message; 
}

function displayOutput2(message2) {
    document.getElementById("print4").innerHTML = message2; 
}

function demonstrateDivision() {
    const result = "100" / "10";
    displayOutput(`"100" / "10" = ${result}`);
}

function demonstrateAddition() {
    const result = "100" + "10"; 
    displayOutput(`"100" + "10" = ${result}`)
}

function demonstrateNaN() {
    const result = "Hello" / 10;
    displayOutput(`Demonstrating NaN: "Hello" / 10 = ${result}`);
}

function demonstrateInfinity() {
    const result = 1 / 0;
    displayOutput(`Demonstrating Infinity: 1 / 0 = ${result}`);
}

function demonstrateHexa() {
    const result = (0xFF).toString(); // 255 in decimal
    displayOutput(`Demonstrating Hexadecimal: 0xFF = ${result}`);
}

function stringLength() {
    const str = "Hello World"; 
    displayOutput2(`"${str}"  has ${str.length} "characters" `); 
}

function stringConcat() {
    const str1 = "Hello"; 
    const str2 = "World"; 
    displayOutput2(`${str1} ${str2} = "${str1}" + "${str2}"`); 
}

function stringUppercase() {
    const str = "Hello World";
    displayOutput2(`Uppercase String: "${str}" -> "${str.toUpperCase()}"`);
}

function stringLowercase() {
    const str = "Hello";
    displayOutput2(`Lower Case: "${str}" -> "${str.toLowerCase()}"`);
}

function stringTrim() {
    const str = "    HELLO  WORLD"; 
    displayOutput2(`${str} -> ${str.trim()}`); 
}

function combine() {
    let str1 = document.getElementById("firstName").value; 
    let str2 = document.getElementById("lastName").value; 

    displayOutput2(`${str1} ${str2} `);
}