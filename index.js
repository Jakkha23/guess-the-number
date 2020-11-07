//gör ett random nummer
function randomInt() {
    return Math.floor(Math.random() * 100)
}


//secretNumber = randomnummer och loggar secret number
const secretNumber = randomInt
console.log(secretNumber())


/*tar user guess från "user-input" i html filen och ger den namnet
"stringvalue", "stringvalue" konverteras sedan till ett number*/
function getUserGuess() {
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue, 10)
}


/*
lyssnar på eventet "keyup" på Enter knappen och deklarerar sedan "guess" som det som 
användaren skrev in i "user-input" fast konverterat till en siffra
*/
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const guess = getUserGuess()
        console.log(guess)
    }
})

if (guess < secretNumber) {
    setMessage('too  low!')
}
if (guess > secretNumber) {
    setMessage('too high!')
}
if (guess === secretNumber) {
    setMessage('right answer!')
}
function setMessage(msg) {
    document.getElementById("message").innerText = msg
}




