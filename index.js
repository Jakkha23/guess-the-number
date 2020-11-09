let input = document.getElementById("user-input")
let guessAmount = []
let guessHistory = []

function randomInt() {
    return Math.floor(Math.random() * 100)
}


var secretNumber = randomInt()

function getUserGuess() {
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue)
}

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        checkGuess()
    }
})

function checkGuess() {
    let guess = getUserGuess()
    console.log(guess)
    addGuess(guess)
    if (guess < secretNumber) {
        setMessage("too low!")
        console.log("too low")
    } else if (guess > secretNumber) {
        setMessage("too high!")
        console.log("too high")
    } else {
        setMessage("Correct!")
        console.log("Correct")
    }
    document.getElementById('user-input').value = ''
}

function setMessage(msg) {
    document.getElementById("message").innerHTML = msg
}

function addGuess(guess) {
    document.getElementById("guessAmount").innerHTML = "Amount of guesses: " + guessAmount.unshift(guess)
}
function addGuessHistory(guess) {
    document.getElementById("guessHistory").innerHTML = "Guess history:" + guessHistory.push(guess)
}