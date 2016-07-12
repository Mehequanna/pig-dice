// Back-End Logic

var dieRoll = function() {
  return 1 + Math.floor(Math.random() * 6);
}

function Player(name, totalScore, turn) {
  this.name = name;
  this.score = totalScore;
  this.turn = turn;
}


// Front End Logic

$(document).ready(function(){
  var player1 = new Player("Player 1", 0, 0);
  var player2 = new Player("Player 2", 0, 0);

  $('#player1roll').click(function() {
    $('#player1Active').html(dieRoll());
  }); //End Player 1 Click Event
  $('#player2roll').click(function() {
    $('#player2Active').html(dieRoll());
  }); //End Player 1 Click Event



}); //End Document.Ready Function
