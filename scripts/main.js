// ------------------------------------------------Añadir x u o por turnos
let casillasColection = document.querySelectorAll(".box-all");
let borrador = document.getElementById("borrar");
let turno = document.getElementById("turno");
let turnTit = document.getElementById("turnTit");
const ficha1 = document.getElementById("fichas1");
const ficha2 = document.getElementById("fichas2");
const lastWinner = document.getElementById("lastWinner")

let casillas = casillasColection
let contador = 12;

let changer = true;
let borrarFicha = true;

const tablero = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
]

const borrarFichaHTML = (casilla) => {
    if (changer && casilla.innerHTML === "X") {
        casilla.innerHTML = ""
        return true
    } else if (!changer && casilla.innerHTML === "O") {
        casilla.innerHTML = ""
        return true
    }
    return false
}

const jugarFicha = (casilla) => {
    if (casilla.innerHTML == "") {
        if (changer) {
            casilla.innerHTML = "X"
            turno.innerHTML = "O";
            Win();
            ficha1.innerHTML--;
        } else {
            casilla.innerHTML = "O";
            turno.innerHTML = "X";
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

borrador.addEventListener('click', () => {
    casillas.forEach((casilla) => {
        casilla.innerHTML = "";
        ficha1.innerHTML = 6;
        ficha2.innerHTML = 6;
        contador = 12;
        turnTit.innerHTML = "Player's Turn:";
        turno.innerHTML = "X";

        casilla.classList.remove('WinLine');
        turnT.classList.remove('WinLine');
        turnTit.classList.remove('WinLine');
    })
})

// ------------------------------------Resetear game end


// ------------------------------------------------Añadir x u o por turnos end
// ---------------------------------------------Comprobador win

const selectWinnerBoxes = (winner, winner2, winner3) => {
    turnTit.innerHTML = winner.innerHTML + " is the winner";
    turno.innerHTML = "Thanks for playing";  /******************************************************No me aparece en  el juego idk why */
    console.log(turno) /*************************************comprobamos que chota está pasando */
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
