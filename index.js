function getUserGuess () {
    const stringvalue = document.getElementById('user-input').nodeValue
    return parseInt(stringvalue, 10)
}

document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const guess = getGuess(
            console.log(guess)
        )
    }
})

function setMessage(msg) {
    if (guess < realNumber) {
        return "too low!"
    }
    if (guess > realNumber) {
        return "too high!"
    }
    if (guess = realNumber) {
        return "You guessed the right number!"
    }
}

