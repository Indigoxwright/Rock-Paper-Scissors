var words = ['Rock', 'Paper', 'Scissors',];
function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for(var x=0; x<20; x++)
    console.log(getComputerChoice(words));