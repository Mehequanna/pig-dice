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

Player.prototype.winCheck = function() {
  if (this.totalScore >= 100)  {
    alert(this.name + " Wins!");
  }
}



// Front End Logic

$(document).ready(function(){
  var player1 = new Player("Player 1", 0, 0, 0);
  var player2 = new Player("Player 2", 0, 0, 0);

  $('#player1roll').click(function() {
    var roll = dieRoll();
    if (roll === 1) {
      player1.runningTally = 0;
      $('#player1Active').html(player1.runningTally);
    } else {
      player1.runningTally += roll;
      $('#player1Active').html(player1.runningTally);
    }
  }); //End Player 1 Click Event

  $('#player1hold').click(function() {
    player1.totalScore += player1.runningTally; //Prototype
    $('#player1Total').html(player1.totalScore);
    player1.runningTally = 0;
    $('#player1Active').html(player1.runningTally);
    player1.winCheck();
  });

  $('#player2roll').click(function() {
    var roll = dieRoll();
    if (roll === 1) {
      player2.runningTally = 0;
      $('#player2Active').html(player2.runningTally);
    } else {
      player2.runningTally += roll;
      $('#player2Active').html(player2.runningTally);
    }
  }); //End Player 1 Click Event

  $('#player2hold').click(function() {
    player2.totalScore += player2.runningTally; //Prototype
    $('#player2Total').html(player2.totalScore);
    player2.runningTally = 0;
    $('#player2Active').html(player2.runningTally);
    player2.winCheck();
  });
}); //End Document.Ready Function
