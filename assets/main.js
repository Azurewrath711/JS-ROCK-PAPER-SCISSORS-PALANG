document.getElementById("gobtn").addEventListener("click", play, false);
var win = 0;
var loss = 0;
var tie = 0;

function play() {
  var types = ['Rock', 'Paper', 'Scissors'];
  var computer_choice = types[Math.floor(Math.random() * (types.length))];


  document.getElementById("choiceDisplay").innerHTML = computer_choice;
  var user_button = document.querySelector("input[name=choice]:checked");
  if (user_button) {
    var user_choice = user_button.value;
  } else {
    window.alert("Choose your Weapon");
    return;
  }

  if (user_choice == computer_choice) {
    document.getElementById("result").textContent = "Tie!";
    var ties = document.getElementById("ties");
    ties.innerHTML = parseInt(ties.innerHTML) + 1;
    return;
  }

  switch (computer_choice) {
    case "Rock":
      if (user_choice == "Paper") {
        document.getElementById("result").textContent = "You Win!";
        var wins = document.getElementById("wins");
        wins.innerHTML = parseInt(wins.innerHTML) + 1;
        
      } else {
        document.getElementById("result").textContent = "You Lost.";
        var losses = document.getElementById("losses");
        losses.innerHTML = parseInt(losses.innerHTML) + 1;
      }

      break;
    
    case "Paper":
      if (user_choice == "Scissors") {
        document.getElementById("result").textContent = "You Win!";
        var wins = document.getElementById("wins");
        wins.innerHTML = parseInt(wins.innerHTML) + 1;

      } else {
        document.getElementById("result").textContent = "You Lost.";
        var losses = document.getElementById("losses");
        losses.innerHTML = parseInt(losses.innerHTML) + 1;
      }

      break;
      
    case "Scissors":
      if (user_choice == "Rock") {
        document.getElementById("result").textContent = "You Win!";
        var wins = document.getElementById("wins");
        wins.innerHTML = parseInt(wins.innerHTML) + 1;

      } else {
        document.getElementById("result").textContent = "You Lost.";
        var losses = document.getElementById("losses");
        losses.innerHTML = parseInt(losses.innerHTML) + 1;
      }
  }
}