class Ficha{

    constructor(tipo){
        this.tipo = tipo;

    }

    tipo = ["X", "O"];
    turno 
   
    comprobarTurno(){



    }
   
    generarFicha(){




        //place 
    }


}
// -------------------------------------------------- Functions----------------------------------------------



function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    turn.innerHTML = b1.innerHTML + " is a winner";
    turn.style.fontSize = "40px";
}
function GetWinner() {

    let Box1 = document.getElementById("Box1"),
        Box2 = document.getElementById("Box2"),
        Box3 = document.getElementById("Box3"),
        Box4 = document.getElementById("Box4"),
        Box5 = document.getElementById("Box5"),
        Box6 = document.getElementById("Box6"),
        Box7 = document.getElementById("Box7"),
        Box8 = document.getElementById("Box8"),
        Box9 = document.getElementById("Box9");



    if (Box1.innerHTML !== "" && Box1.innerHTML === Box2.innerHTML && Box1.innerHTML === Box3.innerHTML)
        selectWinnerBoxes(Box1, Box2, Box3);

    if (Box4.innerHTML !== "" && Box4.innerHTML === Box5.innerHTML && Box4.innerHTML === Box6.innerHTML)
        selectWinnerBoxes(Box4, Box5, Box6);

    if (Box7.innerHTML !== "" && Box7.innerHTML === Box8.innerHTML && Box7.innerHTML === Box9.innerHTML)
        selectWinnerBoxes(Box7, Box8, Box9);

    if (Box1.innerHTML !== "" && Box1.innerHTML === Box4.innerHTML && Box1.innerHTML === Box7.innerHTML)
        selectWinnerBoxes(Box1, Box4, Box7);

    if (Box2.innerHTML !== "" && Box2.innerHTML === Box5.innerHTML && Box2.innerHTML === Box8.innerHTML)
        selectWinnerBoxes(Box2, Box5, Box8);

    if (Box3.innerHTML !== "" && Box3.innerHTML === Box6.innerHTML && Box3.innerHTML === Box9.innerHTML)
        selectWinnerBoxes(Box3, Box6, Box9);

    if (Box1.innerHTML !== "" && Box1.innerHTML === Box5.innerHTML && Box1.innerHTML === Box9.innerHTML)
        selectWinnerBoxes(Box1, Box5, Box9);

    if (Box3.innerHTML !== "" && Box3.innerHTML === Box5.innerHTML && Box3.innerHTML === Box7.innerHTML)
        selectWinnerBoxes(Box3, Box5, Box7);

}