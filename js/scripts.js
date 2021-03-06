// Back-End Logic

var dieRoll = function() {
  return 1 + Math.floor(Math.random() * 6);
}

function Player(name, totalScore, turn, runningTally, human) {
  this.name = name;
  this.totalScore = totalScore;
  this.turn = turn;
  this.runningTally = runningTally;
  this.human = human;
}

Player.prototype.winCheck = function() {
  if (this.totalScore >= 100)  {
    alert(this.name + " Wins!");
  }
}



// Front End Logic

$(document).ready(function(){
  var player1 = new Player("Player 1", 0, 0, 0);
  var player2 = new Player("Player 2", 0, 0, 0, false);

  // var computer = function() {
  //   var roll = dieRoll();
  //   for (var i = 0; i < 3; i++) {
  //     if ( roll === 1) {
  //       $('#player2hold').trigger('click');
  //       console.log(roll);
  //       var roll = 0;
  //     } else {
  //       $('#player2roll').trigger('click');
  //     }
  //   }
  //   $('#player2hold').trigger('click');
  // }

  $('#player1roll').click(function() {
    $('#player2roll').hide();
    var roll = dieRoll();
    if (roll === 1) {
      player1.runningTally = 0;
      $('#player1Active').html(player1.runningTally);
      $('#player1hold').trigger('click');
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
    player1.turn += 1;
    $('#player1turn').html(player1.turn);
    $('#player1roll').hide();
    $('#player2roll').show();
    player1.winCheck();

    // if (player2.human === false) {
      // computer();
    // }
  });

// Player.prototype.roll = function() {
//   var roll = dieRoll();
//   if (roll === 1) {
//     this.runningTally = 0;
//   }
// }

  $('#player2roll').click(function() {
    $('#player1roll').hide();
    var roll = dieRoll();
    if (roll === 1) {
      player2.runningTally = 0;
      $('#player2Active').html(player2.runningTally);
      $('#player2hold').trigger('click');
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
    player2.turn += 1;
    $('#player2turn').html(player2.turn);
    $('#player2roll').hide();
    $('#player1roll').show();
    player2.winCheck();
  });
}); //End Document.Ready Function
