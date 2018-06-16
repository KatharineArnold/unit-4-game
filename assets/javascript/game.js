
$(() => {

    var images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTST8ovwcFeZ-tDcKZS3EWJZdJtUEWWUlhquAwHRUIp0bwXNcfV",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXtLLJjsQipaeR7arZy4mJMh4RBYrjTDmI2w90SeZ7rUmrBATzw",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIJW8raw3mncrWOlWzaCfrkLEejROohA22IxKYkpZIa4sJPFPdQ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQua1z_Tq_F4toN8Tu10iQrMxi1ZsteotbhnAnN9h36pfdX4qD5",
    ];

    let wins = 0;
    let losses = 0;
    let computerNumber = 0;
    let crystalNumberOptions = []
      // total points tracker
      let playerScore = 0



    function assignComputerNumber() {
        // random number for computers number
        computerNumber = random(19, 120);
        // update computer number
        $(".computerNumber").text(`Match this number: ${computerNumber}`);
    }

    // random number generator
    function random(start, end) {
        return Math.floor(Math.random() * ((end - start) + 1) + start);
    };


    function generateCrystalNumbers() {
        // random number assigned to crystals
        crystalNumberOptions = []
        for (let i = 0; i < 4; i++) {
            let crystalValue = random(1, 12);
            crystalNumberOptions.push(crystalValue);
        }
    }

    function startGame() {
        // reset computer number
        assignComputerNumber();
        //reset user number
          // total points tracker
          playerScore = 0
          $(".yourScore").text(`Your Number: ${playerScore}`);
        //change crystal value
        generateCrystalNumbers();
        //Generate new crystals
    }

    startGame();

  

    // crystal creator
    for (var i = 0; i < 4; i++) {

        // create img tag
        var imageCrystal = $("<img>");

        //add crystal image class
        imageCrystal.addClass("crystal-image");

        //    add img src to all crystals
        imageCrystal.attr("src", images[i]);

        //    set crystal value to each crystal
        // imageCrystal.attr("data-crystalvalue", crystalNumberOptions[i]);
        imageCrystal.attr("data-crystalIndex", i);

        // add to DOM
        $("#crystals").append(imageCrystal);
    }

    // update scoreboard
    function updateWinLose() {
        if (playerScore === computerNumber) {

            $(".win-lose").text("You Win!!");
            wins++
            startGame();
        }
        else if (playerScore > computerNumber) {

            $(".win-lose").text("You Lose!!")
            losses++
            startGame();
        }
        //   scoreboard
        $(".scoreBoard").text(`Wins: ${wins}  losses: ${losses} `)
    }

    // click on crystal event
    $(".crystal-image").on("click", function () {
        //if game is over
        // ignore click
        if ((playerScore === computerNumber) || (playerScore > computerNumber)) {
            return;
        }
        const crystalIndexAttr = ($(this).attr("data-crystalIndex"));
        const crystalIndex = parseInt(crystalIndexAttr);

        crystalNumber = crystalNumberOptions[crystalIndex];
        playerScore += crystalNumber
        // update total points // win lose
        $(".yourScore").text(`Your Number: ${playerScore}`);

        updateWinLose();


    });
   
    
    updateWinLose();
 

});



