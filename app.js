const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

// A function to update the score of a player and opponent
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

// calling our function to update the scores of the players
p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


// When the winning score is changed, the game must be reset
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})


// When the reset button is clicked, the game must be reset
resetButton.addEventListener('click', reset)


// A function to reset the scores back to 0 and changes boolean to 
// reflect the game is no longer over
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}