// Key events to listen for letters typed
    
    /* onkeydown

//Display "Press any key to get started!"
    // Event listener for any key to start game

    /* alert("Press any key to get started!"); */
// Start game
    function startGame() {
        document.querySelector(".wins-counter").textContent=winsCounter;
    }

//Record wins, # of times user guessed word correctly
    //Need Counter
    winsCounter = 0;
//Record number of guess remaining
    //Need Counter
    guessesRemainingCounter = 10;
    //Display guesses

//Create an array of words for game
    var fairyTaleWords = [
        "aurora",
        "briar rose",
        "maleficent",
        "prince philip",
        "flora",
        "fauna",
        "merryweather",
        "king stefan",
        "spinning wheel",
        "true loves kiss",
        "blessings",
        "fairies",
        "curse",
        "beauty",
        "wit",
        "grace",
        "dance",
        "song",
        "music",
        "eyvind earle",
        "mary costa",
        "helene stanley"
    ];

//Display amount of letters to word
   /*  for (var i=0; i<fairyTaleWords.length; i++) {
        return fairyTaleWords[0];
    } */

    
//Replace each letter with underscore
    

//Display letters guessed correctly within word



//Game starts new word automatically
startGame();

//Bonus : Sound when word guessed correctly
// Organize code as an object, except for the key events to the letter gussed
        //Save whole game and its properties in an object
        //Save any funtions as methods, call them underneath object declaration using
        //  event listeners
        //Place global variables and functions above object
        //Order: Global variables, objects, then calls