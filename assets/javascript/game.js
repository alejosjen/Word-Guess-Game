// At start of game
function startGame() {
    document.querySelector(".wins-counter").textContent = winsCounter;
    document.querySelector(".guesses-remaining").textContent = guessesRemaining;
}

// ** Words for Game **
const fairyTaleWords = [
    "aurora",
    "maleficent",
    "flora",
    "fauna",
    "merryweather",
    "blessings",
    "fairies",
    "curse",
    "beauty",
    "wit",
    "grace",
    "dance",
    "song",
    "music",
];

// ** Game Word Selection and Displays **
//Arrays for right and wrong guesses
//Not sure how much these arrays are helping, they are beginning to feel unecessary.
let rightLetterArr = [];
let wrongLetterArr = [];

// ** Counters **
winsCounter = 0;
guessesRemaining = 10;

//Select randomly one item from array for currentWord
//Split the word into letters
//Loop through the current word and replace the letters with underscores
const currentWord = fairyTaleWords[Math.floor(Math.random() * fairyTaleWords.length)];
var currentWordArr = currentWord.split("");
for (var i = 0; i < currentWordArr.length; i++) {
    currentWordArr[i] = "_";
};

//Listen for guess
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);
    //Check if user's guess is right
    currentWord.split('').forEach(function (letter, index) {
        if (letter === keyWord) {
            currentWordArr[index] = letter;
            rightLetterArr.push(keyWord);
            //Need something to contain the function so it stops displaying
            //the guessed letter into each split part of the word, it's magnifying
            //itself with each iteration.
            //Need to prevent correct letters from going to next area of incorrect letters 
        };
        //This area is for the incorrectly guessed letters
        //As of now, it repeats the forEach function for all the incorrect
        //letters into each split part of the word and displays both incorrect
        //and correct words into the "You've guessed these letters", rather than
        //just the wrongLetterArr.

        //The code below sort of works to decrease the guesses counter and track letters,
        //but again, it displays all of the iterations into each split part of the word
        //and then subracts too many (ex. fairies, guess k, it subtracts 8, not 1).

        /*   else {
             letter != keyWord;
             wrongLetterArr.push(keyWord);
             guessesRemaining --;
             document.querySelector(".incorrect-letters").textContent = wrongLetterArr;
             document.querySelector(".guesses-remaining").textContent = guessesRemaining;
         } */
         //Testing code to display letters in guessed letters area.
         //Still need to figure out how to display the wrong letters in the wrong letters array
         //because the above code is funky and repeats everything due to the forEach function
         document.querySelector(".incorrect-letters").textContent=keyWord;
    });

    //Overwrites "Press Any Key to Start" with correct letter guesses
    document.querySelector("#start").textContent = currentWordArr.join(' ');
    if (currentWordArr.join('') == currentWord) {
        alert('You win!');
        
        // } else {
        //Need closing code to call the loss when guessesRemaining gets to 0.
        //Right now it alerts 'you lost!' after the first wrong key press.
        //  alert('You lost!');
        //} 
    };
});

startGame();
//Need game to start new word automatically, right now user has to refresh the page.
