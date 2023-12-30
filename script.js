let name = "Charlie";
let gamepiece = 0;
const gameboard = [];
function createPlayer(name, gamepiece){
    gamepiece =  Math.floor(Math.random()*2);
    if(gamepiece == 0){
        gamepiece = "X";
    } else if(gamepiece = 1){
        gamepiece = "O";
    }
    const player = name;
    console.log(player + " is playing with " + gamepiece);
}

function gameBoard(){
let grid = document.querySelector(".gameboard");
grid.innerHTML = "";
    for(let y=0; y<3; y++){
        gameboard[y] = []
        let gridCellY = document.createElement("div");
            gridCellY.id = "gridCellY" + y;
            gridCellY.className = "gridCell";
            gridCellY.innerHTML=`
        <div id="gridContent${y} class= "gridContent">test</div>
        `
        grid.appendChild(gridCellY);
        
        for(let x=1; x<3; x++){
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
}

function addCell(x, y){
    gameboard[x][y] = cell(x, y);
}

function cell(x,y){
    return (x)+","+(y);
}

function playGame(){

}