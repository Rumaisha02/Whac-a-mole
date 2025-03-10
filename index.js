let currentMoleTile;
let currentPlantTile;
let score=0;
let gameover=false;
window.onload = function () {
    setGame();
}

function setGame() {

    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("game-board").appendChild(tile);
    }


    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);

}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();

}

function setMole() {
    if (currentMoleTile) {
        currentMoleTile.innerHTML = " ";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if (currentPlantTile && currentPlantTile.id == num) {
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}
function setPlant() {
    if (currentPlantTile) {
        currentPlantTile.innerHTML = " ";
    }
    let Plant = document.createElement("img");
    Plant.src = "./plant.png";

    let num = getRandomTile();
    if (currentMoleTile && currentMoleTile.id == num) {
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(Plant);
}

function selectTile(){
    if(this==currentMoleTile){
        score+=10;
        document.getElementById("score").innerText=score.toString();//updated score
    }
    if(this==currentPlantTile){
        document.getElementById("score").innerText= "GAME OVER  "+ score.toString();

        // document.getElementById('score').innerHTML="   RESTART   ";
        score=0;
        }
}