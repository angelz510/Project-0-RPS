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
let computerPoints = 0;
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

// Defining rock
let rock = document.getElementById("rock");
rock.addEventListener("click", function(event){
    playerPick(event.target.className);
})
    
// Defining paper
let paper = document.getElementById("paper");
paper.addEventListener("click", function(event){
    playerPick(event.target.className);
})

// Defining scissors
let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function(event){
    playerPick(event.target.className);
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
    // Winning Combos
    if (choice == "rock" && computerPicks == "paper") {
        console.log('You picked Rock and CPU picked Paper: You Lose IDK how'); 
        // computer ++
        computerPoints++;
    }   if (choice == "rock" && computerPicks == "scissors") {
        console.log('You picked Rock and CPU picked Scissors: You Win'); 
        // player ++
        playerPoints++;
    }   if (choice == "rock" && computerPicks == "rock") {
        console.log('You picked Rock and CPU picked Rock: DRAW');
    } 
    if (choice == "paper" && computerPicks == "rock") {
        console.log('You picked Paper and CPU picked Rock: You Win somehow'); 
        //player ++
        playerPoints++;
    }   if (choice == "paper" && computerPicks == "paper") {
        console.log('You picked paper and CPU picked paper: DRAW');
    }   if (choice == "paper" && computerPicks == "scissors") {
        console.log('You picked Paper and CPU picked Scissors: You Lose'); 
        // computer ++
        computerPoints++;
    } 
    if (choice == "scissors" && computerPicks == "rock") {
        console.log('You picked Scissors and CPU picked rock: You Lose');
        // computer ++
        computerPoints++;
    }   if (choice == "scissors" && computerPicks == "paper") {
        console.log('You picked Scissors and CPU picked Paper: You Win'); 
        // player ++
        playerPoints++;
    }   if (choice == "scissors" && computerPicks == "scissors") {
        console.log('You picked Scissors and CPU picked Scissors: DRAW');
    } 
    updateScoreboard();
}


// Win
/*function win() {
    
}

// Lose
function lose() {
    computerPoints++; 
     
}
*/
// Scoreboard function
function updateScoreboard() {
    playerScore.innerHTML = playerPoints;
    computerScore.innerHTML = computerPoints;
}


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
