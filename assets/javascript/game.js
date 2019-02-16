for(var i=0; i<4; i++){
    var imageCrystal = $("<img>");
    var x = i+1;
    var randomNumber;
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/crystal"+x+".png");
    imageCrystal.attr("data-crystalvalue", (Math.floor(Math.random() *11)+1));
    imageCrystal.attr("data-crystalnumber", i);
    $("#crystals").append(imageCrystal);
} 

var txtNumberToGuess = document.getElementById("_numberToGuess");
var txtwins = document.getElementById("_wins");
var txtlosses = document.getElementById("_losses");
var txtTotalScore = document.getElementById("_totalScore");

var crystalGame = {
    targetNumber : 0,
    wins : 0,
    losses : 0,
    counter : 0,
    totalScore : 0,
    newGame : function () {
        crystalGame.targetNumber= (Math.floor(Math.random()*100)+21);
        txtNumberToGuess.textContent= crystalGame.targetNumber;
        crystalGame.counter=0;
        txtTotalScore.textContent=0;      
        for(var i=0; i<4; i++){
            $("img[data-crystalnumber='"+i+"']").attr("data-crystalvalue", (Math.floor(Math.random() *11)+1));
        }

    }
   
}

crystalGame.targetNumber= (Math.floor(Math.random()*100)+21);
txtNumberToGuess.textContent= crystalGame.targetNumber;
txtwins.textContent=crystalGame.wins;
txtlosses.textContent=crystalGame.losses;
txtTotalScore.textContent=crystalGame.totalScore;

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    crystalGame.counter += crystalValue;
    txtTotalScore.textContent=crystalGame.counter;

    console.log(this);

    if (crystalGame.counter === crystalGame.targetNumber) {
      alert("You win!");
      crystalGame.wins = crystalGame.wins + 1;
      txtwins.textContent=crystalGame.wins;
      crystalGame.newGame();
    }

    else if (crystalGame.counter >= crystalGame.targetNumber) {
      alert("You lose!!");
      crystalGame.losses = crystalGame.losses + 1;
      txtlosses.textContent=crystalGame.losses;
      crystalGame.newGame();
    }

});
