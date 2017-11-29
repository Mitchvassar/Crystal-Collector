$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19);

  $('#randomNumber').text(Random);
//variables
  var num1= Math.floor(Math.random()*11+1);
  var num2= Math.floor(Math.random()*11+1);
  var num3= Math.floor(Math.random()*11+1);
  var num4= Math.floor(Math.random()*11+1);

  var total= 0; 
  var wins= 0;
  var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//reset
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random);
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      total= 0;
      $('#finalTotal').text(total);
      } 
//adds wins
function winner(){
alert("You win!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//adds losses
function loser(){
alert ("You lost!");
  losses++;
  $('#numberLosses').text(losses);
  reset();
}
//gem on click
  $('#gem1').on ('click', function(){
    total = total + num1;
    console.log("New total= " + total);
    $('#finalTotal').text(total); 
        if (total == Random){
          winner();
        }
        else if ( total > Random){
          loser();
        }   
  });  

  $('#gem2').on ('click', function(){
    total = total + num2;
    console.log("New total= " + total);
    $('#finalTotal').text(total); 
        if (total == Random){
          winner();
        }
        else if ( total > Random){
          loser();
        } 
  }); 

  $('#gem3').on ('click', function(){
    total = total + num3;
    console.log("New total= " + total);
    $('#finalTotal').text(total);
          if (total == Random){
          winner();
        }
        else if ( total > Random){
          loser();
        } 
  });  

  $('#gem4').on ('click', function(){
    total = total + num4;
    console.log("New total= " + total);
    $('#finalTotal').text(total); 
      
          if (total == Random){
          winner();
        }
        else if ( total > Random){
          loser();
        }
  });   
}); 