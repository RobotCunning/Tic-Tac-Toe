const form = document.querySelector("form");
form.addEventListener("submit", function(event) { 
    event.preventDefault(); // Prevents the form from submitting and the page from reloading 
  });

const name = "";
const gamepiece = 0;
const gameboard = [];

function createPlayer(name, gamepiece){
    name = document.getElementById("nameInput");
    gamepiece =  Math.floor(Math.random()*2);
    if(gamepiece == 0){
        gamepiece = "X";
    } else if(gamepiece = 1){
        gamepiece = "O";
    }
    console.log(name.value + " is playing with " + gamepiece);
    return {name, gamepiece};
}

function gameBoard(){
let grid = document.querySelector(".gameboard");
grid.innerHTML = "";
    for(let y=0; y<3; y++){
        gameboard[y] = []
        //let //gridCellY = document.createElement("div");
            //gridCellY.id = "gridCellY" + y;
            //gridCellY.className = "gridCell";
            //gridCellY.innerHTML=`
            //<div id="gridContent${y} class= "gridContent">test</div>
            //`
            //grid.appendChild(gridCellY);
        
        for(let x=0; x<3; x++){
            addCell(y, x);
            let gridCellX = document.createElement("div");
            gridCellX.id = "gridCellX"+ x;
            gridCellX.className = "gridCell";
            gridCellX.innerHTML=`
            <div id="gridContent${x} class= "gridContent">test</div>
            `
        grid.appendChild(gridCellX);
        }
    }
console.log(gameboard);
playGame(gameboard)
return gameboard;
}

function addCell(x, y){
    gameboard[x][y] = cell(x, y);
}

function cell(x,y){
    return "X";
}

function playGame(gameboard){
if(gameboard[0][0] && gameboard[1][0] && gameboard[2][0] === 'X'){
    console.log('Winner')
}  else if(gameboard[0][1] && gameboard[1][1] && gameboard[2][1] === 'X'){
    console.log('Winner')
} else if(gameboard[0][2] && gameboard[1][2] && gameboard[2][2] === 'X'){
    console.log('Winner')
}  else {
    console.log('Loser')
}
}