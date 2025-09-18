function rollDice() {
  // Generate a random number between 1 and 6 for Player 1
  var randomNum1 = Math.floor(Math.random() * 6) + 1;
  // Generate a random number between 1 and 6 for Player 2, ensuring it's different from Player 1's roll
  var randomNum2 = Math.floor(Math.random() * 6) + 1;

  // This loop ensures the second roll is different from the first
  while (randomNum2 === randomNum1) {
    randomNum2 = Math.floor(Math.random() * 6) + 1;
  }

  // Construct the image paths based on the new random numbers
  var imageSource1 = "images/dice" + randomNum1 + ".png";
  var imageSource2 = "images/dice" + randomNum2 + ".png";

  // Select the image elements and set their 'src' attributes
  document.querySelector(".img1").setAttribute("src", imageSource1);
  document.querySelector(".img2").setAttribute("src", imageSource2);

  // Determine the winner and update the H1 tag
  if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🏆";
  } else {
    // With the while loop, a draw is now impossible
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
  }
}