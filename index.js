const realNumber = 34

let guess = document.getElementById("user-input").Value



function closeOrNot(guess) {
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

document.getElementById("user-input").onkeyup = closeOrNot


console.log(closeOrNot(guess))

