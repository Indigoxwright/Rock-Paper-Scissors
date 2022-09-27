function getComputerChoice ()
  var array = ["Rock", "Paper", "Scissors"]
  var randInt = randomGenerator(0, array.length - 1);
  var item = array[randInt];