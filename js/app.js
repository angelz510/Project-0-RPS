console.log("sup dude");

// Rock Paper Scissors

// Reset btn
reset = document.getElementById("restart");
reset.addEventListener("click", function(event) {
    gameReset(event.target.id);
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
    //choices for rock
    if (choice == "rock" && computerPicks == "paper") {
        result.innerHTML = 'You picked Rock and CPU picked Paper: You Lose IDK how'; 
        // computer ++
        computerPoints++;

    }   if (choice == "rock" && computerPicks == "scissors") {
        result.innerHTML = 'You picked Rock and CPU picked Scissors: You Win'; 
        // player ++
        playerPoints++;

    }   if (choice == "rock" && computerPicks == "rock") {
        result.innerHTML = 'You picked Rock and CPU picked Rock: DRAW';
    } 
    
    // choices for paper
    if (choice == "paper" && computerPicks == "rock") {
        result.innerHTML = 'You picked Paper and CPU picked Rock: You Win somehow'; 
        //player ++
        playerPoints++;

    }   if (choice == "paper" && computerPicks == "paper") {
        result.innerHTML = 'You picked paper and CPU picked paper: DRAW';

    }   if (choice == "paper" && computerPicks == "scissors") {
        result.innerHTML = 'You picked Paper and CPU picked Scissors: You Lose'; 
        // computer ++
        computerPoints++;
    } 
    
    // choices for scissors
    if (choice == "scissors" && computerPicks == "rock") {
        result.innerHTML = 'You picked Scissors and CPU picked rock: You Lose';
        // computer ++
        computerPoints++;

    }   if (choice == "scissors" && computerPicks == "paper") {
        result.innerHTML = 'You picked Scissors and CPU picked Paper: You Win'; 
        // player ++
        playerPoints++;

    }   if (choice == "scissors" && computerPicks == "scissors") {
        result.innerHTML = 'You picked Scissors and CPU picked Scissors: DRAW';
    } 
    updateScoreboard();    

}

// Scoreboard function
function updateScoreboard() {
    playerScore.innerHTML = playerPoints;
    computerScore.innerHTML = computerPoints;
}

// best of 3 or first to 2 win
if (computerPoints > playerPoints) {
    console.log('lose');
} else if (playerPoints > computerPoints){
    console.log('win');
}

// reset function
function gameReset() {
    playerPick();
    updateScoreboard();
    playerPoints = 0;
    computerPoints = 0;
    result.innerHTML = '';
}




