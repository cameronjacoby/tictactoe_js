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

  // set variables for game state and player state

  var gameState = document.getElementById("game_state");
  var playerState = document.getElementById("player_state");

  // set variables for types of game

  var singlePlayer = document.getElementById("single_player");
  var twoPlayer = document.getElementById("two_player");


  ////////////////////

  // TWO PLAYER GAME

  twoPlayer.onclick = function (event) {
    playerState.innerHTML = "You have chosen to play the game with two players. Click below to switch to one player.";
    twoPlayer.style.display = "none";
    singlePlayer.style.display = "block";
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

    // initial game state --> player1's turn

    var player1 = true;
    var player2 = false;
    gameState.innerHTML = "Start new game. It's player X's turn!";

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

        // requires a blank box for the player to make a move
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

              if (count === 9 && checkFunction("X") === false && checkFunction("O") === false) {
                gameState.innerHTML = "There is no winner! Click the reset button or anywhere on the board to start a new game.";
              }
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

              if (count === 9 && checkFunction("X") === false && checkFunction("O") === false) {
                gameState.innerHTML = "There is no winner! Click the reset button or anywhere on the board to start a new game.";
              }
            }

            player2 = false;
            player1 = true;
          }
        }

        // if the box clicked is not blank, do nothing
        else {
          console.log(count);
        }
      };
    }

    // function to check for a winner

    var checkFunction = function(S) {
      var boardMap = [ [boxOne.innerHTML, boxTwo.innerHTML, boxThree.innerHTML], [boxFour.innerHTML, boxFive.innerHTML, boxSix.innerHTML], [boxSeven.innerHTML, boxEight.innerHTML, boxNine.innerHTML] ];
      var winnerString = "Player " + S + " is the winner! Click the reset button or anywhere on the board to start a new game.";

      // checks for row wins
      if (boardMap[0][0] === S && boardMap[0][1] === S && boardMap[0][2] === S) {
        gameState.innerHTML = winnerString
        return true;
      }
      else if (boardMap[1][0] === S && boardMap[1][1] === S && boardMap[1][2] === S) {
        gameState.innerHTML = winnerString
        return true;
      }
      else if (boardMap[2][0] === S && boardMap[2][1] === S && boardMap[2][2] === S) {
        gameState.innerHTML = winnerString
        return true;
      }

      // checks for column wins
      else if (boardMap[0][0] === S && boardMap[1][0] === S && boardMap[2][0] === S) {
        gameState.innerHTML = winnerString
        return true;
      }
      else if (boardMap[0][1] === S && boardMap[1][1] === S && boardMap[2][1] === S) {
        gameState.innerHTML = winnerString
        return true;
      }
      else if (boardMap[0][2] === S && boardMap[1][2] === S && boardMap[2][2] === S) {
        gameState.innerHTML = winnerString
        return true;
      }

      // checks for diagonal wins
      else if (boardMap[0][0] === S && boardMap[1][1] === S && boardMap[2][2] === S) {
        gameState.innerHTML = winnerString
        return true;
      }
      else if (boardMap[0][2] === S && boardMap[1][1] === S && boardMap[2][0] === S) {
        gameState.innerHTML = winnerString
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

    resetButton.onclick = function (event) {
      resetBoard();
    };
  };


  ////////////////////

  // SINGLE PLAYER GAME

  singlePlayer.onclick = function (event) {

    playerState.innerHTML = "You have chosen to play the game with one player. Click below to switch to two players.";
    singlePlayer.style.display = "none";
    twoPlayer.style.display = "block";
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

    // initial game state --> your turn

    gameState.innerHTML = "Start new game. It's your turn!"
    var computer = false;

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

        // requires a blank box for the player to make a move
        else if (this.innerHTML === "") {

          gameState.innerHTML = "Now the computer will make its move!"
          this.style.color = '#00AEBC';
          this.innerHTML = "X";
          count += 1;
          console.log(count);

          if (count > 4) {
            checkFunction("X");

            if (count === 9 && checkFunction("X") === false && checkFunction("O") === false) {
              gameState.innerHTML = "There is no winner! Click the reset button or anywhere on the board to start a new game.";
              return;
            }
          }

          setTimeout(function() {

            if (checkFunction("X") === true || checkFunction("O") === true) {
              return;
            }

            // first, computer checks for a possible win

            else if (boxOne.innerHTML === "O" && boxTwo.innerHTML === "O" && boxThree.innerHTML === "") {boxThree.style.color = '#94D60A'; boxThree.innerHTML = "O";}
            else if (boxOne.innerHTML === "O" && boxThree.innerHTML === "O" && boxTwo.innerHTML === "") {boxTwo.style.color = '#94D60A'; boxTwo.innerHTML = "O";}
            else if (boxTwo.innerHTML === "O" && boxThree.innerHTML === "O" && boxOne.innerHTML === "") {boxOne.style.color = '#94D60A'; boxOne.innerHTML = "O";}
            else if (boxFour.innerHTML === "O" && boxFive.innerHTML === "O" && boxSix.innerHTML === "") {boxSix.style.color = '#94D60A'; boxSix.innerHTML = "O";}
            else if (boxFour.innerHTML === "O" && boxSix.innerHTML === "O" && boxFive.innerHTML === "") {boxFive.style.color = '#94D60A'; boxFive.innerHTML = "O";}
            else if (boxFive.innerHTML === "O" && boxSix.innerHTML === "O" && boxFour.innerHTML === "") {boxFour.style.color = '#94D60A'; boxFour.innerHTML = "O";}
            else if (boxSeven.innerHTML === "O" && boxEight.innerHTML === "O" && boxNine.innerHTML === "") {boxNine.style.color = '#94D60A'; boxNine.innerHTML = "O";}
            else if (boxSeven.innerHTML === "O" && boxNine.innerHTML === "O" && boxEight.innerHTML === "") {boxEight.style.color = '#94D60A'; boxEight.innerHTML = "O";}
            else if (boxEight.innerHTML === "O" && boxNine.innerHTML === "O" && boxSeven.innerHTML === "") {boxSeven.style.color = '#94D60A'; boxSeven.innerHTML = "O";}
            else if (boxOne.innerHTML === "O" && boxFour.innerHTML === "O" && boxSeven.innerHTML === "") {boxSeven.style.color = '#94D60A'; boxSeven.innerHTML = "O";}
            else if (boxOne.innerHTML === "O" && boxSeven.innerHTML === "O" && boxFour.innerHTML === "") {boxFour.style.color = '#94D60A'; boxFour.innerHTML = "O";}
            else if (boxFour.innerHTML === "O" && boxSeven.innerHTML === "O" && boxOne.innerHTML === "") {boxOne.style.color = '#94D60A'; boxOne.innerHTML = "O";}
            else if (boxTwo.innerHTML === "O" && boxFive.innerHTML === "O" && boxEight.innerHTML === "") {boxEight.style.color = '#94D60A'; boxEight.innerHTML = "O";}
            else if (boxTwo.innerHTML === "O" && boxEight.innerHTML === "O" && boxFive.innerHTML === "") {boxFive.style.color = '#94D60A'; boxFive.innerHTML = "O";}
            else if (boxFive.innerHTML === "O" && boxEight.innerHTML === "O" && boxTwo.innerHTML === "") {boxTwo.style.color = '#94D60A'; boxTwo.innerHTML = "O";}
            else if (boxThree.innerHTML === "O" && boxSix.innerHTML === "O" && boxNine.innerHTML === "") {boxNine.style.color = '#94D60A'; boxNine.innerHTML = "O";}
            else if (boxThree.innerHTML === "O" && boxNine.innerHTML === "O" && boxSix.innerHTML === "") {boxSix.style.color = '#94D60A'; boxSix.innerHTML = "O";}
            else if (boxSix.innerHTML === "O" && boxNine.innerHTML === "O" && boxThree.innerHTML === "") {boxThree.style.color = '#94D60A'; boxThree.innerHTML = "O";}
            else if (boxOne.innerHTML === "O" && boxFive.innerHTML === "O" && boxNine.innerHTML === "") {boxNine.style.color = '#94D60A'; boxNine.innerHTML = "O";}
            else if (boxOne.innerHTML === "O" && boxNine.innerHTML === "O" && boxFive.innerHTML === "") {boxFive.style.color = '#94D60A'; boxFive.innerHTML = "O";}
            else if (boxFive.innerHTML === "O" && boxNine.innerHTML === "O" && boxOne.innerHTML === "") {boxOne.style.color = '#94D60A'; boxOne.innerHTML = "O";}
            else if (boxThree.innerHTML === "O" && boxFive.innerHTML === "O" && boxSeven.innerHTML === "") {boxSeven.style.color = '#94D60A'; boxSeven.innerHTML = "O";}
            else if (boxThree.innerHTML === "O" && boxSeven.innerHTML === "O" && boxFive.innerHTML === "") {boxFive.style.color = '#94D60A'; boxFive.innerHTML = "O";}
            else if (boxFive.innerHTML === "O" && boxSeven.innerHTML === "O" && boxThree.innerHTML === "") {boxThree.style.color = '#94D60A'; boxThree.innerHTML = "O";}

            // if no possible win, computer tries to block the user

            else if (boxOne.innerHTML === "X" && boxTwo.innerHTML === "X" && boxThree.innerHTML === "") {boxThree.style.color = '#94D60A'; boxThree.innerHTML = "O";}
            else if (boxOne.innerHTML === "X" && boxThree.innerHTML === "X" && boxTwo.innerHTML === "") {boxTwo.style.color = '#94D60A'; boxTwo.innerHTML = "O";}
            else if (boxTwo.innerHTML === "X" && boxThree.innerHTML === "X" && boxOne.innerHTML === "") {boxOne.style.color = '#94D60A'; boxOne.innerHTML = "O";}
            else if (boxFour.innerHTML === "X" && boxFive.innerHTML === "X" && boxSix.innerHTML === "") {boxSix.style.color = '#94D60A'; boxSix.innerHTML = "O";}
            else if (boxFour.innerHTML === "X" && boxSix.innerHTML === "X" && boxFive.innerHTML === "") {boxFive.style.color = '#94D60A'; boxFive.innerHTML = "O";}
            else if (boxFive.innerHTML === "X" && boxSix.innerHTML === "X" && boxFour.innerHTML === "") {boxFour.style.color = '#94D60A'; boxFour.innerHTML = "O";}
            else if (boxSeven.innerHTML === "X" && boxEight.innerHTML === "X" && boxNine.innerHTML === "") {boxNine.style.color = '#94D60A'; boxNine.innerHTML = "O";}
            else if (boxSeven.innerHTML === "X" && boxNine.innerHTML === "X" && boxEight.innerHTML === "") {boxEight.style.color = '#94D60A'; boxEight.innerHTML = "O";}
            else if (boxEight.innerHTML === "X" && boxNine.innerHTML === "X" && boxSeven.innerHTML === "") {boxSeven.style.color = '#94D60A'; boxSeven.innerHTML = "O";}
            else if (boxOne.innerHTML === "X" && boxFour.innerHTML === "X" && boxSeven.innerHTML === "") {boxSeven.style.color = '#94D60A'; boxSeven.innerHTML = "O";}
            else if (boxOne.innerHTML === "X" && boxSeven.innerHTML === "X" && boxFour.innerHTML === "") {boxFour.style.color = '#94D60A'; boxFour.innerHTML = "O";}
            else if (boxFour.innerHTML === "X" && boxSeven.innerHTML === "X" && boxOne.innerHTML === "") {boxOne.style.color = '#94D60A'; boxOne.innerHTML = "O";}
            else if (boxTwo.innerHTML === "X" && boxFive.innerHTML === "X" && boxEight.innerHTML === "") {boxEight.style.color = '#94D60A'; boxEight.innerHTML = "O";}
            else if (boxTwo.innerHTML === "X" && boxEight.innerHTML === "X" && boxFive.innerHTML === "") {boxFive.style.color = '#94D60A'; boxFive.innerHTML = "O";}
            else if (boxFive.innerHTML === "X" && boxEight.innerHTML === "X" && boxTwo.innerHTML === "") {boxTwo.style.color = '#94D60A'; boxTwo.innerHTML = "O";}
            else if (boxThree.innerHTML === "X" && boxSix.innerHTML === "X" && boxNine.innerHTML === "") {boxNine.style.color = '#94D60A'; boxNine.innerHTML = "O";}
            else if (boxThree.innerHTML === "X" && boxNine.innerHTML === "X" && boxSix.innerHTML === "") {boxSix.style.color = '#94D60A'; boxSix.innerHTML = "O";}
            else if (boxSix.innerHTML === "X" && boxNine.innerHTML === "X" && boxThree.innerHTML === "") {boxThree.style.color = '#94D60A'; boxThree.innerHTML = "O";}
            else if (boxOne.innerHTML === "X" && boxFive.innerHTML === "X" && boxNine.innerHTML === "") {boxNine.style.color = '#94D60A'; boxNine.innerHTML = "O";}
            else if (boxOne.innerHTML === "X" && boxNine.innerHTML === "X" && boxFive.innerHTML === "") {boxFive.style.color = '#94D60A'; boxFive.innerHTML = "O";}
            else if (boxFive.innerHTML === "X" && boxNine.innerHTML === "X" && boxOne.innerHTML === "") {boxOne.style.color = '#94D60A'; boxOne.innerHTML = "O";}
            else if (boxThree.innerHTML === "X" && boxFive.innerHTML === "X" && boxSeven.innerHTML === "") {boxSeven.style.color = '#94D60A'; boxSeven.innerHTML = "O";}
            else if (boxThree.innerHTML === "X" && boxSeven.innerHTML === "X" && boxFive.innerHTML === "") {boxFive.style.color = '#94D60A'; boxFive.innerHTML = "O";}
            else if (boxFive.innerHTML === "X" && boxSeven.innerHTML === "X" && boxThree.innerHTML === "") {boxThree.style.color = '#94D60A'; boxThree.innerHTML = "O";}

            // if no possible win and no opportunities to block the user, the computer chooses the first available box

            else if (boxOne.innerHTML === "") {
              boxOne.style.color = '#94D60A';
              boxOne.innerHTML = "O";
            }
            else if (boxTwo.innerHTML === "") {
              boxTwo.style.color = '#94D60A';
              boxTwo.innerHTML = "O";
            }
            else if (boxThree.innerHTML === "") {
              boxThree.style.color = '#94D60A';
              boxThree.innerHTML = "O";
            }
            else if (boxFour.innerHTML === "") {
              boxFour.style.color = '#94D60A';
              boxFour.innerHTML = "O";
            }
            else if (boxFive.innerHTML === "") {
              boxFive.style.color = '#94D60A';
              boxFive.innerHTML = "O";
            }
            else if (boxSix.innerHTML === "") {
              boxSix.style.color = '#94D60A';
              boxSix.innerHTML = "O";
            }
            else if (boxSeven.innerHTML === "") {
              boxSeven.style.color = '#94D60A';
              boxSeven.innerHTML = "O";
            }
            else if (boxEight.innerHTML === "") {
              boxEight.style.color = '#94D60A';
              boxEight.innerHTML = "O";
            }
            else if (boxNine.innerHTML === "") {
              boxNine.style.color = '#94D60A';
              boxNine.innerHTML = "O";
            }

            gameState.innerHTML = "It's your turn!"
            count += 1;
            console.log(count);
            if (count > 4) {
              checkFunction("O");
              if (count === 9 && checkFunction("X") === false && checkFunction("O") === false) {
                gameState.innerHTML = "There is no winner! Click the reset button or anywhere on the board to start a new game.";
                return;
            }
            }
          }, 1000);
        }

        // if the box clicked is not blank, do nothing
        else {
          console.log(count);
        }
      };
    }

    // function to check for a winner

    var checkFunction = function(S) {
      var boardMap = [ [boxOne.innerHTML, boxTwo.innerHTML, boxThree.innerHTML], [boxFour.innerHTML, boxFive.innerHTML, boxSix.innerHTML], [boxSeven.innerHTML, boxEight.innerHTML, boxNine.innerHTML] ];
      var winnerString = function() {
        if (S === "X") {
          gameState.innerHTML = "Congratulations, you beat the computer! Click the reset button or anywhere on the board to start a new game.";
        }
        else {
          gameState.innerHTML = "Looks like the computer has outsmarted you this time! Click the reset button or anywhere on the board to start a new game.";
        };
      }

      // checks for row wins
      if (boardMap[0][0] === S && boardMap[0][1] === S && boardMap[0][2] === S) {
        winnerString();
        return true;
      }
      else if (boardMap[1][0] === S && boardMap[1][1] === S && boardMap[1][2] === S) {
        winnerString();
        return true;
      }
      else if (boardMap[2][0] === S && boardMap[2][1] === S && boardMap[2][2] === S) {
        winnerString();
        return true;
      }

      // checks for column wins
      else if (boardMap[0][0] === S && boardMap[1][0] === S && boardMap[2][0] === S) {
        winnerString();
        return true;
      }
      else if (boardMap[0][1] === S && boardMap[1][1] === S && boardMap[2][1] === S) {
        winnerString();
        return true;
      }
      else if (boardMap[0][2] === S && boardMap[1][2] === S && boardMap[2][2] === S) {
        winnerString();
        return true;
      }

      // checks for diagonal wins
      else if (boardMap[0][0] === S && boardMap[1][1] === S && boardMap[2][2] === S) {
        winnerString();
        return true;
      }
      else if (boardMap[0][2] === S && boardMap[1][1] === S && boardMap[2][0] === S) {
        winnerString();
        return true;
      }

      // else, there is no winner
      else {
        return false;
      }

    };

    // reset function

    var resetBoard = function() {
      console.log(checkFunction("X"));
      if (checkFunction("X") === true) {
        gameState.innerHTML = "Start new game. The computer will make the first move.";
        setTimeout(function() {
          boxFive.style.color = '#94D60A';
          boxFive.innerHTML = "O";
          gameState.innerHTML = "It's your turn!"
          count += 1;
          console.log(count);
        }, 1000);
      }
      else {
        gameState.innerHTML = "Start new game. It's your turn!";
      }
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
    };

    resetButton.onclick = function (event) {
      resetBoard();
    };
  }

}