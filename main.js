console.log("this is working");
function startGame() {
    document.turn = "X";
}

function nextMove(square) {
    square.innerText = document.turn;
}