console.log("sup dude");

// Rock Paper Scissors
// Start btn

// Reset btn
let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    console.log("this is the reset btn");
})

//Scores
let playerPoints = 0;
let playerScore = document.getElementById("player-score");
let computerPoints = 0;
let computerScore = document.getElementById("computer-score");

// Defining rock
let rock = document.getElementById("rock");
rock.addEventListener("click", function(event){
    playerPick(event.target.classname);
})
    

// Defining paper
let paper = document.getElementById("paper");
paper.addEventListener("click", function(event){
    playerPick(event.target.classname);
})

// Defining scissors
let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function(event){
    playerPick(event.target.classname);
})

// Random computer pick
function computerPick() {
    // Create an array out of the choices
    let picks = ["rock", "paper", "scissors"];
    // Log a random pick
    let randomPick = Math.floor(Math.random() * 3);
    return picks[randomPick];
}

// Player pick
function playerPick(choice) {
    let computerPicks = computerPick();
    let picks = ["rock", "paper", "scissors"];
    if (choice == "rock" && computerPicks == "paper") {
        console.log('You lose!');
    } else if (computerPicks == "scissors") {
        console.log('You win!'); 
    } else if (computerPicks == "rock") {
        console.log('DRAW');
    } 
    if (choice == "paper" && computerPick == "rock") {
        console.log('You Win!');
    } else if (computerPick == "paper") {
        console.log('DRAW');
    } else if (computerPick == "scissors") {
        console.log('You lose!');
    }
    if (choice == "scissors" && computerPick == "rock") {
        console.log('You lose!');
    } else if (computerPick == "paper") {
        console.log('Your win!');
    } else if (computerPick == "scissors") {
        console.log('DRAW');
    }
}

/*
// Winning combos 
    //if player picks rock:
        //and comp picks paper
            //lose
        //and comp picks scissors
            //win
        //and comp picks rock
            //draw

    //if player picks paper:
        //and comp picks rock
            //win
        //and comp picks scissos
            //lose
        //and comp picks paper
            //draw
    // if player picks scissors:
        //and comp picks rock
            //lose
        //and comp picks paper
            //win
        //and comp picks scissors
            //draw

// best of 3 or first to 2 win

// go again?
*/