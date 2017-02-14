var chosenWord;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var correctWord = [];
var displayWord = document.getElementById("scrambled-word");
var input = document.getElementById("input");
var send = document.getElementById("send");
var guessedCorrect = false;

setUp();

function setUp() {
  loadXMLDoc();
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

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    send.click();
  }
})


function chooseCorrectLetters (word) {
  console.log(chosenWord);
  var splitWord = word.split("");
  for (var i = 0; i < letters.length; i++) {
   for (var j = 0; j < splitWord.length; j++) {
     if (letters[i] === splitWord[j]) {
       correctWord.push(letters[i]);
       displayWord.innerHTML = correctWord.join("");
       console.log(correctWord);
     }
   }
 }
}
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
             chosenWord = xmlhttp.responseText.toLowerCase();
             chooseCorrectLetters(xmlhttp.responseText.toLowerCase());
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "http://www.setgetgo.com/randomword/get.php", true);
    xmlhttp.send();
}
