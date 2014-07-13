window.onload = function() {

  // set variable for box class

  var boxes = document.getElementsByClassName("box");

  // set variables for each box

  var boxOne = document.getElementById("one");
  var boxTwo = document.getElementById("two");
  var boxThree = document.getElementById("three");
  var boxFour = document.getElementById("four");
  var boxFive = document.getElementById("five");
  var boxSix = document.getElementById("six");
  var boxSeven = document.getElementById("seven");
  var boxEight = document.getElementById("eight");
  var boxNine = document.getElementById("nine");

  // set counter variable

  var count = 0;

  // set variable for reset button

  var resetButton = document.getElementById("reset_button");

  // set variable for game state message

  var gameState = document.getElementById("game_state");

  // set variables for types of game

  var singlePlayer = document.getElementById("single_player");
  var twoPlayer = document.getElementById("two_player");

  // initial game state --> player1's turn

  var player1 = true;
  var player2 = false;
  gameState.innerHTML = "Start new game. It's player X's turn!"

  // sets click event for each box

	for (var i = 0; i < 9; i += 1) {
    boxes[i].onclick = function (event) {

      // resets board on click if a winner was just declared
      if (checkFunction("X") === true || checkFunction("O") === true) {
        resetBoard();
        return;
      }

      // resets game on click if the game is finished and there was no winner
      else if (count === 9 && checkFunction("X") === false && checkFunction("O") === false) {
        resetBoard();
        return;
      }

      // requires a blank box to change the contents of the box
      else if (this.innerHTML === "") {

        // if it's player 1's turn
        if (player1 === true) {
          gameState.innerHTML = "It's player O's turn!"
          this.style.color = '#00AEBC';
          this.innerHTML = "X";
          count += 1;
          console.log(count);

          if (count > 4) {
            checkFunction("X");
            checkFunction("O");
          }

          if (count === 9 && checkFunction("X") === false && checkFunction("O") === false) {
            gameState.innerHTML = "There is no winner! Click the reset button or anywhere on the board to start a new game.";
          }

          player1 = false;
          player2 = true;
        }

        // if it's player2's turn
        else {
          gameState.innerHTML = "It's player X's turn!"
          this.style.color = '#94D60A';
          this.innerHTML = "O";
          count += 1;
          console.log(count);

          if (count > 4) {
            checkFunction("X");
            checkFunction("O");
          }

          if (count === 9 && checkFunction("X") === false && checkFunction("O") === false) {
            gameState.innerHTML = "There is no winner! Click the reset button or anywhere on the board to start a new game.";
          }

          player2 = false;
          player1 = true;
        }
      }

      // if the box clicked is not blank, do not change the state of that box
      else {
        console.log(count);
      }
    };
  }

  // function to check for a winner

  var checkFunction = function(S) {
    var boardMap = [ [boxOne.innerHTML, boxTwo.innerHTML, boxThree.innerHTML], [boxFour.innerHTML, boxFive.innerHTML, boxSix.innerHTML], [boxSeven.innerHTML, boxEight.innerHTML, boxNine.innerHTML] ]

    // checks for row wins

    if (boardMap[0][0] === S && boardMap[0][1] === S && boardMap[0][2] === S) {
      gameState.innerHTML = "Player " + S + " is the winner! Click the reset button or anywhere on the board to start a new game.";
      return true;
    }
    else if (boardMap[1][0] === S && boardMap[1][1] === S && boardMap[1][2] === S) {
      gameState.innerHTML = "Player " + S + " is the winner! Click the reset button or anywhere on the board to start a new game.";
      return true;
    }
    else if (boardMap[2][0] === S && boardMap[2][1] === S && boardMap[2][2] === S) {
      gameState.innerHTML = "Player " + S + " is the winner! Click the reset button or anywhere on the board to start a new game.";
      return true;
    }

    // checks for column wins

    else if (boardMap[0][0] === S && boardMap[1][0] === S && boardMap[2][0] === S) {
      gameState.innerHTML = "Player " + S + " is the winner! Click the reset button or anywhere on the board to start a new game.";
      return true;
    }
    else if (boardMap[0][1] === S && boardMap[1][1] === S && boardMap[2][1] === S) {
      gameState.innerHTML = "Player " + S + " is the winner! Click the reset button or anywhere on the board to start a new game.";
      return true;
    }
    else if (boardMap[0][2] === S && boardMap[1][2] === S && boardMap[2][2] === S) {
      gameState.innerHTML = "Player " + S + " is the winner! Click the reset button or anywhere on the board to start a new game.";
      return true;
    }

    // checks for diagonal wins

    else if (boardMap[0][0] === S && boardMap[1][1] === S && boardMap[2][2] === S) {
      gameState.innerHTML = "Player " + S + " is the winner! Click the reset button or anywhere on the board to start a new game.";
      return true;
    }
    else if (boardMap[0][2] === S && boardMap[1][1] === S && boardMap[2][0] === S) {
      gameState.innerHTML = "Player " + S + " is the winner! Click the reset button or anywhere on the board to start a new game.";
      return true;
    }

    // else, there is no winner

    else {
      return false;
    }

  };

  // reset function

  var resetBoard = function() {
    boxOne.innerHTML = "";
    boxTwo.innerHTML = "";
    boxThree.innerHTML = "";
    boxFour.innerHTML = "";
    boxFive.innerHTML = "";
    boxSix.innerHTML = "";
    boxSeven.innerHTML = "";
    boxEight.innerHTML = "";
    boxNine.innerHTML = "";
    count = 0;
    console.log(count);
    if (player1 === true) {
      gameState.innerHTML = "Start new game. It's player X's turn!"
    }
    else {
      gameState.innerHTML = "Start new game. It's player O's turn!"
    }
  };

  // implement reset function on reset button

  resetButton.onclick = function (event) {
    resetBoard();
  };

}