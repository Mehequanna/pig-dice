// Back-End Logic

var dieRoll = function() {
  return 1 + Math.floor(Math.random() * 6);
}

function Player(name, totalScore, turn, runningTally) {
  this.name = name;
  this.totalScore = totalScore;
  this.turn = turn;
  this.runningTally = runningTally;
}



// Front End Logic

$(document).ready(function(){
  var player1 = new Player("Player 1", 0, 0, 0);
  var player2 = new Player("Player 2", 0, 0, 0);

  $('#player1roll').click(function() {
    // var roll = dieRoll();
    if (dieRoll() === 1) {
      player1.runningTally = 0;
      $('#player1Active').html(player1.runningTally);
    } else {
      player1.runningTally += dieRoll();
      $('#player1Active').html(player1.runningTally);
    }
  }); //End Player 1 Click Event




  $('#player2roll').click(function() {
    if (dieRoll() === 1) {
      player2.runningTally = 0;
      $('#player2Active').html(player2.runningTally);
    } else {
      player2.runningTally += dieRoll();
      $('#player2Active').html(player2.runningTally);
    }
  }); //End Player 1 Click Event



}); //End Document.Ready Function
