var words = ["hello", "red", "orange", "black", "daily"];
var chosenWord;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var correctWord = [];
var displayWord = document.getElementById("scrambled-word");
var input = document.getElementById("input");
var send = document.getElementById("send");
var guessedCorrect = false;
setUp();

function setUp() {
  pickWord();
  chooseCorrectLetters();
}
send.addEventListener("click", function () {
  if (input.value === chosenWord) {
    alert("you guessed correct ");
    input.value = "";
    displayWord.innerHTML = "";
    correctWord = [];
    setUp();
  } else {
    alert("wrong")
  }
});

function pickWord () {
  var wordsLength = words.length-1
  var randomPos = Math.floor(Math.random() * wordsLength) + 0;
  chosenWord = words[randomPos];
}

function chooseCorrectLetters () {
  var splitWord = chosenWord.split("");
  for (var i = 0; i < letters.length; i++) {
   for (var j = 0; j < splitWord.length; j++) {
     if (letters[i] === splitWord[j]) {
       correctWord.push(letters[i]);
       displayWord.innerHTML = correctWord.join("");
     }
   }
 }
}
