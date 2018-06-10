
$(() => {

   
    let wins = 0
    let loses = 0
    let computerNumber = 50
  
  //   let computerNumber = []
  
    let crystalNumber = []

    let playerScore = 0
   // click on crystal event
$(".crystal-image").on("click", function() {
   
    playerScore +=10
    alert("Your new score is: " + playerScore);

// update total points
$(".yourScore").text(playerScore);

if (playerScore === computerNumber){

    $(".win-lose").text("You Win!!");
};
  }); 

 


// random number generator for computers number




// random number assigned to crystals




// total points tracker






// update scoreboard




// update computer number
$(".computerNumber").text(computerNumber);



// win lose





























});



