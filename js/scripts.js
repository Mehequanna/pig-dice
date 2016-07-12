// Back-End Logic

var dieRoll = function() {
  return 1 + Math.floor(Math.random() * 6);
}



// Front End Logic

$(document).ready(function(){
  $('#player1roll').click(function() {
    $('#player1Active').html(dieRoll());
  }); //End Player 1 Click Event
  $('#player2roll').click(function() {
    $('#player2Active').html(dieRoll());
  }); //End Player 1 Click Event



}); //End Document.Ready Function
