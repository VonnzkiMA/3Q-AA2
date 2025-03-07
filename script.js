let targetWord;
let currentAttempt = 0;
let attemptsLeft = 5;
let wordBank = [
    "vixen", "bacon", "plane", "water", "stone", "candy", "tears", "flame", "paint", "white",
    "brown", "clamp", "brush", "liver", "shoes", "table", "wound", "night", "flute", "piano",
    "lemon", "smirk", "pearl", "index", "leap", "light", "quilt", "sharp", "march", "jumpy",
    "quick", "viper", "heart", "break", "stare", "spike", "block", "spark", "chair", "rhyme",
    "tiger", "plant", "truck", "trace", "flush", "singh", "grape", "track"
];

// Function to initialize game:
function setupGame() {
    targetWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("Target Word (for testing):", targetWord);
    currentAttempt = 0;
    attemptsLeft = 5;
    resetGrid();
}

// Function to reset the grid:
function resetGrid() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let cell = document.getElementById(`r-${i}-${j}`);
            cell.innerText = "";
            cell.style.backgroundColor = "white";
        }
    }
}

// Core word validation function:
function checkWord() {
    const userInput = getUserInput();
    if (userInput === null || userInput.length !== 5) return;
    
    // Check game state
    if (userInput === targetWord) {
        alert("Congratulations! You've guessed the word.");
        endGame();
    } else {
        processAttempt(userInput);
    }
}

// Function to process user attempts:
function processAttempt(word) {
    if (attemptsLeft === 0) {
        alert("Game Over! The correct word was " + targetWord);
        endGame();
        return;
    }
    
    let usedLetters = [];
    for (let i = 0; i < 5; i++) {
        let cell = document.getElementById(`r-${currentAttempt}-${i}`);
        let letter = word[i];
        cell.innerText = letter;

        if (targetWord[i] === letter) {
            cell.style.backgroundColor = "green";
        } else if (targetWord.includes(letter) && !usedLetters.includes(letter)) {
            cell.style.backgroundColor = "yellow";
            usedLetters.push(letter);
        } else {
            cell.style.backgroundColor = "gray";
        }
    }
    
    currentAttempt++;
    attemptsLeft--;

    // Final state check:
    if (attemptsLeft === 0) {
        alert("Game Over! The correct word was " + targetWord);
        endGame();
    }
}

// Function to get user input:
function getUserInput() {
    let userInput = prompt("Enter a 5-letter word: ");
    if (userInput === null) return null;
    userInput = userInput.toLowerCase().trim();
    if (userInput.length !== 5 || !/^[a-zA-Z]+$/.test(userInput)) {
        alert("Please enter a valid 5-letter word.");
        return getUserInput();
    }
    return userInput;
}

// Function to end the game:
function endGame() {
    const button = document.querySelector("button");
    button.textContent = "Reload Game";
    button.onclick = function() {
        location.reload();
    };
}

// Start the game when the window loads:
window.onload = setupGame;

