var chosenWord;
var words = ["about", "above", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also","although","always","am","among", "amongst", "amoungst", "amount", "an", "and", "another", "any","anyhow","anyone","anything","anyway", "anywhere", "are", "around", "as", "at", "back","be","became", "because","become","becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom","but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven","else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own","part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the"]
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var correctWord = [];
var changeWord = false;
var displayWord = document.getElementById("scrambled-word");
var input = document.getElementById("input");
var send = document.getElementById("send");
var showWord = document.getElementById("show-word");
var newWord = document.getElementById("new-word");
setUp();

function setUp() {
  pickWord();
}

send.addEventListener("click", function () {
  if (changeWord === false) {
    if (input.value === chosenWord) {
      alert("you guessed correct ");
      input.value = "";
      displayWord.innerHTML = "scrambled word: ";
      correctWord = [];
      setUp();
    } else {
      alert("wrong");
    }
  }
});

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    send.click();
  }
});

showWord.addEventListener("click", function () {
  displayWord.innerHTML = "word: " + chosenWord;
  changeWord = true;
});

newWord.addEventListener("click", function () {
  changeWord = false;
  input.value = "";
  displayWord.innerHTML = "scrambled word: ";
  correctWord = [];
  setUp();
});


function chooseCorrectLetters (word) {
  var splitWord = word.split("");
  for (var i = 0; i < letters.length; i++) {
   for (var j = 0; j < splitWord.length; j++) {
     if (letters[i] === splitWord[j]) {
       correctWord.push(letters[i]);
       displayWord.innerHTML = "scrambled word: " + correctWord.join("");
       console.log(correctWord);
     }
   }
 }
}

function pickWord () {
   var wordsLength = words.length-1
   var randomPos = Math.floor(Math.random() * wordsLength) + 0;
   chosenWord = words[randomPos];
   chooseCorrectLetters(chosenWord);
 }
