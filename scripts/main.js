let valueP1 = sessionStorage.getItem('valuePlayer1');
let valueP2 = sessionStorage.getItem('valuePlayer2');



let casillas = casillasColection;
let contador = 12;

let changer = true;
let borrarFicha = true;
turnPlayer.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name

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
            turnPlayer.innerHTML = JSON.parse(sessionStorage.getItem('player2')).name;
            Win();
            ficha1.innerHTML--;
        } else {
            casilla.innerHTML = "O";
            turnPlayer.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name;
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
    casillas.forEach((casilla) => {
        casilla.innerHTML = "";
        casilla.addEventListener('click', () => {
            if (Win()) {
                eraseTable();
            }
            else if (contador > 6) {
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
const eraseTable = () => {
    casillas.forEach((casilla) => {
        casilla.innerHTML = "";
        ficha1.innerHTML = 6;
        ficha2.innerHTML = 6;
        contador = 12;
        turnTit.innerHTML = "Turn:";
        turnPlayer.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name;
        changer = !changer
        casilla.classList.remove('WinLine');
        turnT.classList.remove('WinLine');
        turnTit.classList.remove('WinLine');

    })
}
borrador.addEventListener('click', eraseTable)


// ------------------------------------Resetear game end



// ---------------------------------------------Comprobador win

const selectWinnerBoxes = (winner, winner2, winner3) => {

    if (winner.innerHTML == "X") {
        turnTit.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name + " is the winner";
        sessionStorage.setItem('winner',JSON.parse(sessionStorage.getItem('player1')).name)
        
    } else if (winner.innerHTML == "O") {
        turnTit.innerHTML = JSON.parse(sessionStorage.getItem('player2')).name + " is the winner";
        sessionStorage.setItem('winner',JSON.parse(sessionStorage.getItem('player2')).name)
    }
    turnPlayer.innerHTML = "Thanks for playing";  /******************************************************No me aparece en  el juego idk why */
    winner.classList.add('WinLine');
    winner2.classList.add('WinLine');
    winner3.classList.add('WinLine');
    // changer = !changer
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
        selectWinnerBoxes(Box1, Box2, Box3); return true;

    }

    if (Box4.innerHTML !== "" && Box4.innerHTML === Box5.innerHTML && Box4.innerHTML === Box6.innerHTML) {
        selectWinnerBoxes(Box4, Box5, Box6); return true;

    }
    if (Box7.innerHTML !== "" && Box7.innerHTML === Box8.innerHTML && Box7.innerHTML === Box9.innerHTML) {
        selectWinnerBoxes(Box7, Box8, Box9); return true;

    }
    if (Box1.innerHTML !== "" && Box1.innerHTML === Box4.innerHTML && Box1.innerHTML === Box7.innerHTML) {
        selectWinnerBoxes(Box1, Box4, Box7); return true;

    }
    if (Box2.innerHTML !== "" && Box2.innerHTML === Box5.innerHTML && Box2.innerHTML === Box8.innerHTML) {
        selectWinnerBoxes(Box2, Box5, Box8); return true;

    }
    if (Box3.innerHTML !== "" && Box3.innerHTML === Box6.innerHTML && Box3.innerHTML === Box9.innerHTML) {
        selectWinnerBoxes(Box3, Box6, Box9); return true;

    }
    if (Box1.innerHTML !== "" && Box1.innerHTML === Box5.innerHTML && Box1.innerHTML === Box9.innerHTML) {
        selectWinnerBoxes(Box1, Box5, Box9); return true;

    }
    if (Box3.innerHTML !== "" && Box3.innerHTML === Box5.innerHTML && Box3.innerHTML === Box7.innerHTML) {
        selectWinnerBoxes(Box3, Box5, Box7); return true;

    }
    return false;

}

mainGame()
