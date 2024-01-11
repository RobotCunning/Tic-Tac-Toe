let player1 = document.getElementById("nameInput1");
let player2 = document.getElementById("nameInput2");
const gameboard = [];
let players = [];
const start=(()=>{
    function createPlayer(name, gamepiece){
    let score = 0;
    //console.log(name.value + " is playing with " + gamepiece);
    const roundWon = () => score++;
    const showScore = () => score;
    const scoreReset = () => score = 0;
    //const showGamepiece = () => gamepiece;
    players.push({name, score});
    
    return {name, gamepiece, showScore, roundWon, score, scoreReset};
}


    players = [
        createPlayer(player1, 'X'),
        createPlayer(player2, 'O')
    ]
    //player1.gamepiece = 'X'
    //player2.gamepiece = 'O'
    console.log(player1.gamepiece, " + ", player2.gamepiece)
    for(i=0; i<players.length; i++){
        user = players[i];
    }
    gameBoard();
    const form = document.querySelector("form");
form.addEventListener("submit", function(event) { 
    event.preventDefault(); // Prevents the form from submitting and the page from reloading 
  });
})
const gameBoard = (() => {
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
            <div id="gridContent${x}${y}" class= "gridContent"><button class="gameButton" onclick="playInput(${x}, ${y})"></button></div>
            `
        grid.appendChild(gridCellX);
        }
    }
function addCell(x, y){
    gameboard[x][y] = cell(x, y);
}
function cell(x,y){
    return 'grid' + x + y;
}

function scoreBoardBuilder(){
    let createScoreboard = document.querySelector('#scoreboard')
    createScoreboard.innerHTML = "";
    for(let i = 0; i<players.length; i++){
        let player = players[i]
        let scoreboard = document.createElement('div')
        scoreboard.id = "player"+ i;
        scoreboard.innerHTML=`
        <div id='score' class='score'>${player.gamepiece} is ${player.name.value} : ${player.showScore()} </div>
        `
        createScoreboard.appendChild(scoreboard);
    }
}


console.log(gameboard);
//playGame(gameboard);
scoreBoardBuilder();
//winCheck();
//boardFull(gameboard) 
//return gameboard;
})
const playGame=((gameboard)=>{
if(
   (gameboard[0][0] == gameboard[1][0] && gameboard[0][0] == gameboard[2][0]) || (gameboard[0][1] == gameboard[1][1] && gameboard[0][1] == gameboard[2][1])
|| (gameboard[0][2] == gameboard[1][2] && gameboard[0][2] == gameboard[2][2]) || (gameboard[0][0] == gameboard[0][1] && gameboard[0][0] == gameboard[0][2])
|| (gameboard[1][0] == gameboard[1][1] && gameboard[1][0] == gameboard[1][2]) || (gameboard[2][0] == gameboard[2][1] && gameboard[2][0] == gameboard[2][2])
|| (gameboard[0][0] == gameboard[1][1] && gameboard[0][0] == gameboard[2][2]) || (gameboard[2][0] == gameboard[1][1] && gameboard[2][0] == gameboard[0][2])){
    user.roundWon();
    winCheck()
    gameBoard();
}
function reset(){
    players[0].scoreReset()
    players[1].scoreReset()
    gameBoard()
}
function winCheck(){
    if(players[0].showScore() == 3 || players[1].showScore() == 3){
        console.log(user.name.value +" wins!");
        return reset();
    }
}
function boardFull(gameboard){
    let count = 0
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            if(gameboard[i][j] === 'O' || gameboard[i][j] === 'X'){
                count++
            }
        }    
    }
    if(count === 9){
        console.log('Draw!')
        gameBoard()
        return draw = true
    } 
}

boardFull(gameboard);
})
const playInput=((x, y)=> {
    let select = document.getElementById("gridContent"+x+y);
    if(user.gamepiece == 'X'){
       select.innerHTML = 'X';
       gameboard[x][y] = user.gamepiece;
       console.log(gameboard) 
    } else {
        select.innerHTML = 'O';
        gameboard[x][y] = user.gamepiece;
        console.log(gameboard) 
    }
    
function switchPlayer(){
    if (user.gamepiece == 'X'){
        user = players[1]
    } else {
        user = players[0]
    }
    console.log(user.gamepiece)
}
    playGame(gameboard)
    switchPlayer();
})
