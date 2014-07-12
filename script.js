window.onload = function() {

  // initial game state --> player1's turn

  var player1 = true;
  var player2 = false;

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

  // set variable for clear button

  var clearButton = document.getElementById("clear_button");

  // box click function

	var boxClick = function(boxNumber) {
    boxNumber.onclick = function (event) {

      // if it's player1's turn
      if (player1 === true) {
        boxNumber.style.color = '#00AEBC';
        boxNumber.innerHTML = "X";
        player1 = false;
        player2 = true;
      }

      // if it's player2's turn
      else {
        boxNumber.style.color = '#94D60A';
        boxNumber.innerHTML = "O";
        player2 = false;
        player1 = true;
      }
    };
  };

  // call box click funciton for each box

  boxClick(boxOne);
  boxClick(boxTwo);
  boxClick(boxThree);
  boxClick(boxFour);
  boxClick(boxFive);
  boxClick(boxSix);
  boxClick(boxSeven);
  boxClick(boxEight);
  boxClick(boxNine);

  // clear function

  var clearBoard = function() {
    boxOne.innerHTML = "";
    boxTwo.innerHTML = "";
    boxThree.innerHTML = "";
    boxFour.innerHTML = "";
    boxFive.innerHTML = "";
    boxSix.innerHTML = "";
    boxSeven.innerHTML = "";
    boxEight.innerHTML = "";
    boxNine.innerHTML = "";
  };

  // implement clear function on clear button

  clearButton.onclick = function (event) {
    clearBoard();
  };

}