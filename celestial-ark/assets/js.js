let startGame = ["Start", "start"]; 
let controls = ["controls", "Controls"];
let synopsis = ["story", "Story"]; 
let currentState = "start"; 
let walk = ["walk"]; 
let path = ["follow path"]; 
let explore = ["explore"]; 



function processCommands() { 
    var input = document.getElementById("userCommands").value.toLowerCase();
    var output = document.getElementById("chatbox");

    if (startGame.includes(input)) {
        console.log("Player enters forest")
        currentState = "forest"; // Update state to "forest" tells us that when user types start the game state is changed to forest
        output.innerHTML = "You find yourself transported to a dark and creepy forest. What do you do?";
    } else if (controls.includes(input)) {
        console.log("Player Enter Controls")
        output.innerHTML = "In this game you type 1 or 2 words to command your player. You can use commands such as Walk or Explore. As you play, you will get some options as to what you want to do. Enjoy!";
    } else if (synopsis.includes(input)) {
        console.log("Player Enters Synopsis")
        output.innerHTML = "You wake up in an unfamiliar world, lying in a dark forest. As you stand, a mysterious scroll appears before you, bearing a message: 'Welcome, Hero. You are in the Lost Realm. To return home, find the five sacred artifacts hidden across this land and defeat the dark guardian who controls them. Good luck, hero.'";
    } else if (currentState === "forest") {
        if (walk.includes(input)) {
            console.log("Player Encounters Path")
            output.innerHTML = "You see a path leading deeper into the forest... Do you follow path or explore more?";
        } else if (path.includes(input)) {
            console.log("Player Follows Path")
            output.innerHTML = "You follow the path and notice an empty field with a house in the middle. Do you enter?";
        } else if (explore.includes(input)){
            console.log("player chooses to explore")
            output.innerHTML = "You chose to explore the area more and it starts pouring rain. You then find a cave do you hide in the cave or go back on the path?"
        }
}
document.getElementById("userCommands").value = "";
}