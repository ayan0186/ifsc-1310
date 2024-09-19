let startGame = ["Start", "start"]; 
let controls = ["controls", "Controls"];
let synopsis = ["story", "Story"]; 
let currentState = "start"; 
let walk = ["walk"]; 
let path = ["follow path"]; 
let explore = ["explore"]; 
let house = ["enter house"]; 
let cave = ["enter cave"]; 
let yes = ["yes"];
let no = ["no"];
let leave = ["leave"]; 



function processCommands() { 
    var input = document.getElementById("userCommands").value.toLowerCase();
    var output = document.getElementById("chatbox");

    console.log("Current State: " + currentState); // Debugging: show current state
    console.log("User Input: " + input); // Debugging: show user input

    //start menu
    if (startGame.includes(input)) {
        console.log("Player Enters Forest");
        currentState = "forest"; // Update state to "forest" tells us that when user types start the game state is changed to forest
        output.innerHTML = "You find yourself transported to a dark and creepy forest. What do you do?";

    } else if (controls.includes(input)) {
        console.log("Player Enter Controls");
        output.innerHTML = "In this game you type 1 or 2 words to command your player. You can use commands such as walk, explore, and follow path. As you play, you will get some options as to what you want to do, remember to read everything carefully as every chose you make is critical and some chooses may not let you go back. This is a game where proper choice making skills are needed. Goodluck and Enjoy!";

    } else if (synopsis.includes(input)) {
        console.log("Player Enters Synopsis");
        output.innerHTML = "You wake up in an unfamiliar world, lying in a dark forest. As you stand, a mysterious scroll appears before you, bearing a message: 'Welcome, Hero. You are in the Lost Realm. To return home, find the five sacred artifacts hidden across this land and defeat the dark guardian who controls them. Good luck, hero.'";

    } 
    
    //forest
    else if (currentState === "forest") {
        if (walk.includes(input)) {
            console.log("Player Encounters Path");
            output.innerHTML = "You see a path leading deeper into the forest... Do you follow path or explore more?";

        } else if (path.includes(input)) {
            console.log("Player Follows Path");
            currentState = "path";
            output.innerHTML = "You follow the path and notice an empty field with a house in the middle. Do you enter?";

        } else if (explore.includes(input)){
            currentState = "path"; 
            console.log("player chooses to explore");
            output.innerHTML = "You chose to explore the area more and it starts pouring rain. You then find a cave do you want to enter cave or go back on the path?";
        } 
}   
    //path
    else if (currentState === "path") {
        if (house.includes(input)) {
            console.log("Player Enters House");
            currentState = "house";
            output.innerHTML = "You enter the house and it seems to be abandoned, but something strange.... you can tell something seems off about this house. Do you want to Explore or leave?";

        } else if (cave.includes(input)) {
            console.log("Player Enters Cave");
            currentState = "cave"; 
            output.innerHTML = "You enter the cave and seek shelter, as you are looking around you notice some big claw mark... You are not alone, do you wish to explore the cave more?";
        }
    }
    //house
    else if (currentState === "house") {
        if (explore.includes(input)) {
            console.log("Player Explores House"); 
            currentState = "explore house"; 
            output.innerHTML = "As you walk around the house you notice a chest. Do you wish to open the chest?";
        } else if (leave.includes(input)) { // Check for leave command
        console.log("Player Leaves House");
        currentState = "path"; 
        output.innerHTML = "You leave the house and return to the path.";
    }
    }
        //chest
    else if(currentState === "explore house") {
        if (yes.includes(input)) {
            console.log("Player Opens Chest"); 
            repeatText();
            currentState = "house";
        } else if (no.includes(input)) {
            console.log("Player Ignores Chest")
            currentState = "house"; 
            output.innerHTML = "You ignored the chest"; 
            }
        }
    //cave 
    else if (currentState === "cave") {
        if (explore.includes(input)) {
            console.log("Player Chooses to Explore Cave"); 
            currentState = "explore cave"; 
            output.innerHTML = "As you go further into the cave, you start hearing some strange sounds. As you get closer to the sound, you see a trail of blood. Do you dare to explore further or go back and follow the path?";
        } else if (leave.includes(input)) { // Check for leave command
        console.log("Player Leaves House");
        currentState = "path"; 
        output.innerHTML = "You leave the house and return to the path.";
    }
    }
}
function repeatText() {
    let output = document.getElementById('chatbox'); 
    let messages = "";
    for (let i = 0; i < 3; i++) {
        messages += "You found nothing in this chest.\n ";
    }
    output.innerHTML = messages;
}