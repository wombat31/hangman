//create an array of words
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];
//Pick a random word
var word = words[Math.floor(Math.random()*words.length)];

//Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

var remainingLetters = word.length;

//The main game loop
while (remainingLetters > 0){
    //show player progress
    alert(answerArray.join(" "));

    //get a guess from the player
    var guess = prompt("Guess a letter, or click cancel to stop playing!");
    if (guess === null){
        break;
    } else if (guess.length !==1) {
        alert("Please enter a single letter");
    } else {
        for(var j = 0; j < word.length; j++ ){
            if(word[j] === guess){
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

//once the game had finished - congratulate the player and end
alert(answerArray.join(" "));
alert("Good job, the answer was: "+ word);