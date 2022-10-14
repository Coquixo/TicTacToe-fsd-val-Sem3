/*getting inputs for session storage variables START*/


/*recuperar datos de session storage y pasarlo a objeto*/

let player1 = sessionStorage.getItem('player1');
let player2 = sessionStorage.getItem('player2');
let valueP1 = sessionStorage.getItem('valuePlayer1');
let valueP2 = sessionStorage.getItem('valuePlayer2');



let casillas = casillasColection;
let contador = 12;

let changer = true;
let borrarFicha = true;
// turno.innerHTML = player1;

const borrarFichaHTML = (casilla) => {
    if (changer && casilla.innerHTML === "X") {
        casilla.innerHTML = "";
        return true
    } else if (!changer && casilla.innerHTML === "O") {
        casilla.innerHTML = "";
        return true
    }
    return false
}

const jugarFicha = (casilla) => {
    if (casilla.innerHTML == "") {
        if (changer) {
            casilla.innerHTML = "X"
            turno.innerHTML = player2;
            Win();
            ficha1.innerHTML--;
        } else {
            casilla.innerHTML = "O";
            turno.innerHTML = player1;
            Win();
            ficha2.innerHTML--;

        }
        changer = !changer;

        contador--;
        return true
    }
    return false
}

const mainGame = () => {
    casillas.forEach((casilla, /*index*/) => {
        casilla.innerHTML = "";
        casilla.addEventListener('click', () => {
            if (contador > 6) {
                jugarFicha(casilla)
            } else if (contador <= 6 && contador != 0) {
                if (borrarFicha) {
                    borrarFicha = !borrarFichaHTML(casilla);
                } else {
                    borrarFicha = jugarFicha(casilla)
                }
            }
        });
    });
}

// ------------------------------------Resetear game start


// ------------------------------------Resetear game end



// ---------------------------------------------Comprobador win

const selectWinnerBoxes = (winner, winner2, winner3) => {
    turnTit.innerHTML = winner.innerHTML + " is the winner";
    turno.innerHTML = "Thanks for playing";  /******************************************************No me aparece en  el juego idk why */
    winner.classList.add('WinLine');
    winner2.classList.add('WinLine');
    winner3.classList.add('WinLine');
    changer = !changer
    contador = 0;
}

const Win = () => {

    let Box1 = document.getElementById("Box1"),
        Box2 = document.getElementById("Box2"),
        Box3 = document.getElementById("Box3"),
        Box4 = document.getElementById("Box4"),
        Box5 = document.getElementById("Box5"),
        Box6 = document.getElementById("Box6"),
        Box7 = document.getElementById("Box7"),
        Box8 = document.getElementById("Box8"),
        Box9 = document.getElementById("Box9");

    if (Box1.innerHTML !== "" && Box1.innerHTML === Box2.innerHTML && Box1.innerHTML === Box3.innerHTML) {
        selectWinnerBoxes(Box1, Box2, Box3);
    }
    if (Box4.innerHTML !== "" && Box4.innerHTML === Box5.innerHTML && Box4.innerHTML === Box6.innerHTML) {
        selectWinnerBoxes(Box4, Box5, Box6);
    }
    if (Box7.innerHTML !== "" && Box7.innerHTML === Box8.innerHTML && Box7.innerHTML === Box9.innerHTML) {
        selectWinnerBoxes(Box7, Box8, Box9);
    }
    if (Box1.innerHTML !== "" && Box1.innerHTML === Box4.innerHTML && Box1.innerHTML === Box7.innerHTML) {
        selectWinnerBoxes(Box1, Box4, Box7);
    }
    if (Box2.innerHTML !== "" && Box2.innerHTML === Box5.innerHTML && Box2.innerHTML === Box8.innerHTML) {
        selectWinnerBoxes(Box2, Box5, Box8);
    }
    if (Box3.innerHTML !== "" && Box3.innerHTML === Box6.innerHTML && Box3.innerHTML === Box9.innerHTML) {
        selectWinnerBoxes(Box3, Box6, Box9);
    }
    if (Box1.innerHTML !== "" && Box1.innerHTML === Box5.innerHTML && Box1.innerHTML === Box9.innerHTML) {
        selectWinnerBoxes(Box1, Box5, Box9);
    }
    if (Box3.innerHTML !== "" && Box3.innerHTML === Box5.innerHTML && Box3.innerHTML === Box7.innerHTML) {
        selectWinnerBoxes(Box3, Box5, Box7);
    }

}

mainGame()
