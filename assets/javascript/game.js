
$(() => {

    var images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTST8ovwcFeZ-tDcKZS3EWJZdJtUEWWUlhquAwHRUIp0bwXNcfV",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXtLLJjsQipaeR7arZy4mJMh4RBYrjTDmI2w90SeZ7rUmrBATzw",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIJW8raw3mncrWOlWzaCfrkLEejROohA22IxKYkpZIa4sJPFPdQ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQua1z_Tq_F4toN8Tu10iQrMxi1ZsteotbhnAnN9h36pfdX4qD5",
        ];
    
    let wins = 0
    let loses = 0
    

















 
// random number generator
function random(start, end){
    return Math.floor(Math.random() * ((end-start)+1) + start);
};



// random number for computers number
let computerNumber =  random(19, 120);

// update computer number
$(".computerNumber").text(computerNumber);


// random number assigned to crystals
    let crystalNumberOptions = [] 
  for (let i = 0; i < 4; i++) {
      let crystalValue = random(1, 12);
      crystalNumberOptions.push(crystalValue); 
  }
   
// total points tracker
    let playerScore = 0

// crystal creator
for (var i = 0; i < 4; i++) {

    // create img tag
        var imageCrystal = $("<img>");
    
        //add crystal image class
        imageCrystal.addClass("crystal-image");
    
    //    add img src to all crystals
        imageCrystal.attr("src", images[i]);
    
    //    set crystal value to each crystal
        imageCrystal.attr("data-crystalvalue", crystalNumberOptions[i]);
    
        // add to DOM
        $("#crystals").append(imageCrystal);
      }

   // click on crystal event
$(".crystal-image").on("click", function() {
    let crystalNumber = ($(this).attr("data-crystalvalue"));
    crystalNumber = parseInt(crystalNumber);
    playerScore += crystalNumber
    alert("Your new score is: " + playerScore);

// update total points // win lose
$(".yourScore").text(playerScore);


// update scoreboard
if (playerScore === computerNumber){

    $(".win-lose").text("You Win!!");
    wins++
}
else if (playerScore > computerNumber) {

    $(".win-lose").text("You Lose!!")
    loses++
}
  }); 

 


























































});



