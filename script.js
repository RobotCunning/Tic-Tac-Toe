const form = document.querySelector("form");
form.addEventListener("submit", function(event) { 
    event.preventDefault(); // Prevents the form from submitting and the page from reloading 
  });


let player = document.getElementById("nameInput");
const gameboard = [];

function createPlayer(name){
    name = player;
    let score = 0;
    let gamepiece =  Math.floor(Math.random()*2);
    if(gamepiece == 0){
        gamepiece = "X";
    } else if(gamepiece == 1){
        gamepiece = "O";
    }
    //console.log(name.value + " is playing with " + gamepiece);
    const showScore = ()  => console.log(score);
    const roundWon = () => score++;
    //const showGamepiece = () => gamepiece;
    return {name, gamepiece, showScore , roundWon};
}

let user = createPlayer(player)

function gameBoard(){
let grid = document.querySelector(".gameboard");
grid.innerHTML = "";
    for(let y=0; y<3; y++){
        gameboard[y] = []
        for(let x=0; x<3; x++){
            addCell(y, x);
            let gridCellX = document.createElement("div");
            gridCellX.id = "gridCellX"+ x;
            gridCellX.className = "gridCell";
            gridCellX.innerHTML=`
            <div id="gridContent${x}${y}" class= "gridContent"><button onclick="playInput(${x}, ${y})"></button></div>
            `
        grid.appendChild(gridCellX);
        }
    }
console.log(gameboard);
playGame(gameboard);
//return gameboard;
}

function addCell(x, y){
    gameboard[x][y] = cell(x, y);
}

function cell(x,y){
    return "";
}

function playGame(gameboard){
if(gameboard[0][0] && gameboard[1][0] && gameboard[2][0] === 'X' || gameboard[0][0] && gameboard[1][0] && gameboard[2][0] === 'O'){
    console.log('Winner')
    gameBoard();
    user.roundWon();
    user.showScore();
}  else if(gameboard[0][1] && gameboard[1][1] && gameboard[2][1] === 'X' || gameboard[0][1] && gameboard[1][1] && gameboard[2][1] ==='O'){
    console.log('Winner')
    gameBoard();
    user.roundWon();
    user.showScore();
} else if(gameboard[0][2] && gameboard[1][2] && gameboard[2][2] === 'X' || gameboard[0][2] && gameboard[1][2] && gameboard[2][2] ==='O'){
    console.log('Winner')
    gameBoard();
    user.roundWon();
    user.showScore();
}  else if(gameboard[0][0] && gameboard[0][1] && gameboard[0][2] === 'X' || gameboard[0][0] && gameboard[0][1] && gameboard[0][2] ==='O' ){
    console.log('Winner')
    gameBoard();
    user.roundWon();
    user.showScore();
}  else if(gameboard[1][0] && gameboard[1][1] && gameboard[1][2] === 'X' || gameboard[1][0] && gameboard[1][1] && gameboard[1][2] ==='O' ){
    console.log('Winner')
    gameBoard();
    user.roundWon();
    user.showScore();
} else if(gameboard[2][0] && gameboard[2][1] && gameboard[2][2] === 'X' || gameboard[2][0] && gameboard[2][1] && gameboard[2][2] === 'O'){
    console.log('Winner')
    gameBoard();
    user.roundWon();
    user.showScore();
}  else if(gameboard[0][0] && gameboard[1][1] && gameboard[2][2] === 'X' || gameboard[0][0] && gameboard[1][1] && gameboard[2][2] === 'O' ){
    console.log('Winner')
    gameBoard();
    user.roundWon();
    user.showScore();
}  else if(gameboard[2][0] && gameboard[1][1] && gameboard[0][2] === 'X' || gameboard[2][0] && gameboard[1][1] && gameboard[0][2] === 'O'){
    console.log('Winner')
    gameBoard();
    user.roundWon();
    user.showScore();
}
}


function playInput(x, y) {
    let select = document.getElementById("gridContent"+x+y);
    select.innerHTML = user.gamepiece;
    gameboard[y][x] = user.gamepiece;
    playGame(gameboard)
}